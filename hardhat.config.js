require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",

    networks: {
      sepolia: {
        
        url: process.env.ALCHEMEY_API_KEY_URL,
      accounts:  [process.env.PRIVATE_KEY],
      },
    },



};
