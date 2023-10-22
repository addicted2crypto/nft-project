//ethers.js is built in with  hardhat

// const { ethers } = require("hardhat");

const hre = require("hardhat");


async function main() {

    const nftContract = await hre.ethers.deployContract( "AddictedsNFTs");

    // const deployedContract = await contract.deploy();
    await nftContract.waitForDeployment();
    console.log("Addicteds Contract Deployed to:", nftcontract.address);



}



main()
    .then(() => process.exit(0))
    .catch((error)=> {
    console.log(error, "try again");
    process.exit(1)
});


