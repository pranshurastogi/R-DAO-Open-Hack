pragma solidity ^0.8.0;

import "./RDAOToken.sol";
import "./QuadraticFunding.sol";

contract ResearchPaperDAO {
    RDAOToken public rdaoToken;
    QuadraticFunding public quadraticFunding;

    constructor(address _rdaoToken, address _quadraticFunding) {
        rdaoToken = RDAOToken(_rdaoToken);
        quadraticFunding = QuadraticFunding(_quadraticFunding);
    }

   struct Comment {
        address commenter;
        string content;
        uint256 timestamp;
    }

    struct ResearchPaper {
        address owner;
        string publicationName;
        string contentURI;
        bool isPublic;
        uint256 price; 
        bool publishStatus;
        uint256 totalVotes;
        mapping(address => uint256) votes; // Quadratic voting tracking
        Comment[] comments; // Array to hold comments
    }

    mapping(uint256 => ResearchPaper) public researchPapers;
    mapping(address => uint256) public paperCounts;
    mapping(address => uint256) public earnings; // Mapping to store earnings
    uint256 public paperCounter = 0; 

    event PaperSubmitted(uint256 indexed paperId, address indexed owner, string publicationName);
    event PaperVoted(uint256 indexed paperId, address indexed voter, uint256 votes);
    event PaperPublished(uint256 indexed paperId, address indexed owner);
    event PaperCommented(uint256 indexed paperId, address indexed commenter, string content);

   function submitPaper(string memory _publicationName, string memory _contentURI, bool _isPublic, uint256 _price) public {
    ResearchPaper storage newPaper = researchPapers[paperCounter];
    newPaper.owner = msg.sender;
    newPaper.publicationName = _publicationName;
    newPaper.contentURI = _contentURI;
    newPaper.isPublic = _isPublic;
    newPaper.price = _price;
    newPaper.publishStatus = false;
    newPaper.totalVotes = 0;

    paperCounts[msg.sender] += 1;
    paperCounter += 1;
    emit PaperSubmitted(paperCounter, msg.sender, _publicationName);
}


  function viewPaperDetails(uint256 _paperId) public view returns (
    address owner,
    string memory publicationName,
    string memory contentURI,
    bool isPublic,
    uint256 price,
    bool publishStatus,
    uint256 totalVotes
) {
    require(researchPapers[_paperId].owner != address(0), "Paper does not exist");
    
    ResearchPaper storage paper = researchPapers[_paperId];
    
    return (
        paper.owner,
        paper.publicationName,
        paper.contentURI,
        paper.isPublic,
        paper.price,
        paper.publishStatus,
        paper.totalVotes
    );
}


    function commentOnPaper(uint256 _paperId, string memory _content) public {
        require(researchPapers[_paperId].owner != address(0), "Paper does not exist");
        researchPapers[_paperId].comments.push(Comment({
            commenter: msg.sender,
            content: _content,
            timestamp: block.timestamp
        }));

        emit PaperCommented(_paperId, msg.sender, _content);
    }

    function setPricingForPaper(uint256 _paperId, uint256 _newPrice) public {
        require(researchPapers[_paperId].owner == msg.sender, "Only the owner can set the price");
        researchPapers[_paperId].price = _newPrice;
    }

    function withdrawEarnings() public {
        uint256 amount = earnings[msg.sender];
        require(amount > 0, "No earnings to withdraw");

        earnings[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }

    function publishPaper(uint256 _paperId) public {
        require(researchPapers[_paperId].owner == msg.sender, "Only the owner can publish the paper");
        require(!researchPapers[_paperId].publishStatus, "Paper is already published");

        researchPapers[_paperId].publishStatus = true;
        
        emit PaperPublished(_paperId, msg.sender);
    }

    function voteOnPaper(uint256 _paperId, uint256 _votes) public {
        require(researchPapers[_paperId].owner != address(0), "Paper does not exist");
        require(researchPapers[_paperId].votes[msg.sender] == 0, "You have already voted");

        // Logic to handle quadratic voting using the quadraticFunding contract's calculateFunding method.
        uint256[] memory individualContributions = new uint256[](1);
        individualContributions[0] = _votes;
        uint256 quadraticVotes = quadraticFunding.calculateFunding(individualContributions, _votes);
        
        researchPapers[_paperId].votes[msg.sender] = quadraticVotes;
        researchPapers[_paperId].totalVotes += quadraticVotes;
        
        emit PaperVoted(_paperId, msg.sender, quadraticVotes);
    }

   
}
