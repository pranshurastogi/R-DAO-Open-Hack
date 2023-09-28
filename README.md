# R-DAO-Open-Hack

# ResearchPaperDAO on Filecoin Virtual Machine

Welcome to the `ResearchDAO` repository! This platform serves as a decentralized hub for research paper submission, community engagement, and fostering a vibrant research marketplace using smart contracts. Our contracts have been deployed on the Filecoin Virtual Machine Testnet.

## Table of Contents

- [System Overview](#system-overview)
- [Contracts Breakdown](#contracts-breakdown)
- [ResearchPaperDAO Contract Details](#researchpaperdao-contract-details)
- [Deployment](#deployment)

## System Overview

### Research Submission

`ResearchPaperDAO` provides an platform for scientists and researchers to upload their work. Upon submission, authors have the choice to:

- Determine the **visibility** of their papers, allowing them to make the content public or private.
- Attach a **Content URI** which is a direct link or reference to their actual research content.

### Community Engagement and Voting

To foster community involvement:

- Publicly available research can be accessed by the community for reading and evaluation.
- An integrated commenting system enables intellectual discussions and feedback.
- A quadratic voting mechanism ensures that voting on papers is democratic, preventing disproportionate influence by any one entity.

### Research Marketplace

The platform isn't just about sharing; it's also about commerce:

- Researchers can set a **price** for their private papers.
- Users interested in accessing a private research paper can purchase access, promoting a dynamic marketplace where knowledge has value.

## Contracts Breakdown

1. **ResearchPaperDAO.sol**: The heart of the platform that manages research paper submissions, voting, comments, and marketplace functionalities.
2. **RDAOToken.sol**: An ERC-20 token that powers transactions within the platform.
3. **QuadraticFunding.sol**: Manages the unique quadratic voting mechanism, ensuring a fair and democratic paper evaluation system.

## ResearchPaperDAO Contract Details

This contract is the main interface for researchers and the community. Below is a breakdown of its functionalities:

- **submitPaper**:

  - Allows authors to upload their research papers.
  - Parameters include the publication name, content URI, visibility preference, and pricing details.
  - Each paper is uniquely indexed, and an event (`PaperSubmitted`) is emitted upon successful submission.

- **viewPaperDetails**:

  - Enables users to retrieve the details of a specific paper using its unique ID.
  - Returns attributes like the owner, publication name, content URI, visibility status, price, and voting details.

- **commentOnPaper**:

  - Facilitates community interaction by allowing users to comment on a research paper.
  - Comments are stored in an array, and each entry contains the commenter's address, content, and timestamp.
  - An event (`PaperCommented`) is emitted once a comment is successfully added.

- **setPricingForPaper**:

  - Provides authors the autonomy to adjust the pricing for their paper.
  - Only the owner of the paper can modify its price.

- **withdrawEarnings**:

  - Allows authors to withdraw any earnings accumulated from the sale of their research papers.
  - The amount is sent to the author's address, and their earnings counter is reset.

- **publishPaper**:

  - Authors can control the publication status of their work, deciding whether it's available for public viewing or not.
  - Only the owner of the paper can toggle its publication status.

- **voteOnPaper**:
  - Users can vote on papers using the quadratic voting system.
  - The voting mechanism ensures that each user's influence is proportionate, preventing undue control by powerful entities.
  - Voting contributions are processed by the `QuadraticFunding` contract to determine the actual vote count.
  - An event (`PaperVoted`) is emitted after successful voting.

## Deployment

The contracts are currently active on the Filecoin Virtual Machine Testnet. Inspect and interact with them using these explorer links:

- **ResearchPaperDAO**: [https://calibration.filscan.io/tx/0xbdece35e31558a184a7c296732327662bd42cd971155e68c93e9dbe919f90870/]
- **RDAOToken**: [https://calibration.filscan.io/tx/0xa84c7ff320fc496f7da10ca2c0e2e600b25e11a6fca19e19a2b70eb1679ef507/]
- **QuadraticFunding**: [https://calibration.filscan.io/tx/0x61b94f213d99bbb39dbd333d0eceb08156f52e2f48878f83fc723782c3626e95/]
