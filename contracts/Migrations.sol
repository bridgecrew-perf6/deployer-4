// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import {ERC20PresetFixedSupply} from "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";

contract Migrations {
  address public owner;
  uint public last_completed_migration;

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  constructor() public {
    owner = msg.sender;
    new ERC20PresetFixedSupply("Test", "Test", 10000000, address(this));
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }
}
