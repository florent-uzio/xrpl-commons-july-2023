// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract FirstContract {
  string message = "Initial Message Test";
  address payable public owner;

  constructor() {
    owner = payable(msg.sender);
  }

  function getMessage() public view returns (string memory) {
    return message;
  }

  function setMessage(string memory newMessage) public {
    message = newMessage;
  }

  function calculateSum(uint256[] memory numbers) public pure returns (uint256) {
    uint256 sum = 0;
    for (uint256 i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }

  function greetOwner(string memory ownerName) public pure returns (string memory) {
    return string.concat("Hello, ", ownerName);
  }
}
