require('@nomiclabs/hardhat-waffle')

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()
  console.log('PRINT ACCOUNTS ')
  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.6.12',
  networks: {
    hardhat: {
      chainId: 15555,
    },
    trust: {
      url: 'https://api.testnet-dev.trust.one',
      accounts: [
        'a94b13a69756cb84833978359e6eae91cde82135a7501444f3989b4b6b4cea1d',
      ],
    },
    matic: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [
        'a94b13a69756cb84833978359e6eae91cde82135a7501444f3989b4b6b4cea1d',
      ],
    },
  },
  paths: {
    artifacts: './src/artifacts',
    cache: './src/cache',
  },
  NODE_OPTIONS: '--openssl-legacy-provider',
}
