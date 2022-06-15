pragma solidity >=0.6.0 <0.9.0;
import "./DevestOne.sol";
import "./Ownable.sol";

contract DeVestFactory is Ownable {

    bool private active = false;
    DevestOne[] private tangibles;

    constructor(){
        active = true;
    }

    event ContractIssued(address indexed issuer_address, DevestOne indexed contract_address);

    function issue(address _address, string memory name, string memory symbol)
    public
    {
        DevestOne tst = new DevestOne(_address);
        tangibles.push(tst);

        emit ContractIssued(msg.sender, tst);
    }

    function test()
        public
        view
        returns (uint256)
    {
        uint256 test = 123;
        return test;
    }

    function fetch()
        public
        view
        returns (DevestOne[] memory)
    {
        return tangibles;
    }

    function activate(bool _activate)
        public
        onlyOwner
        returns(bool)
    {
        active = _activate;
        return active;
    }
}
