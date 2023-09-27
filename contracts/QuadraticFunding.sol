// SPDX-License-Identifier: MIT

// import "hardhat/console.sol";

pragma solidity ^0.8.0;

import "./RDAOToken.sol";

contract QuadraticFunding {
    RDAOToken public rdaoToken;
    mapping(address => uint256) public contributions;

    constructor(address _rdaoToken) {
        rdaoToken = RDAOToken(_rdaoToken);
    }

    function contribute(uint256 _amount) public {
        rdaoToken.transferFrom(msg.sender, address(this), _amount);
        contributions[msg.sender] += _amount;
    }

    function calculateFunding(uint256[] memory _individualContributions, uint256 _totalContributions) public pure returns (uint256) {
        uint256 sumOfRoots = 0;
        for (uint256 i = 0; i < _individualContributions.length; i++) {
            sumOfRoots += sqrt(_individualContributions[i]);
        }
        return (sumOfRoots * sumOfRoots) / _totalContributions;
    }

    function sqrt(uint256 x) internal pure returns (uint256 y) {
        uint256 z = (x + 1) / 2;
        y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
    }
}
