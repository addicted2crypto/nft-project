// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract AddictedsNFTs is ERC721 {

    constructor() ERC721("Addicteds NFTs", "Addicted2NFTs") {
        
        _mint(msg.sender, 1);
        _mint(msg.sender, 2);
        _mint(msg.sender, 3);
        _mint(msg.sender, 4);
        _mint(msg.sender, 5);

    }
}