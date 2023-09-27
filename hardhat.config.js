require("@nomiclabs/hardhat-waffle");
const { infuraProjectId, mnemonic } = require('./secrets.json');

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${infuraProjectId}`,
      accounts: {mnemonic: mnemonic}
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};
