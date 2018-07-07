pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;

    function Lottery() public {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > 1 ether);

        players.push(msg.sender);
    }

    function getPlayers() public view returns (address[]) {
        return players;
    }
}