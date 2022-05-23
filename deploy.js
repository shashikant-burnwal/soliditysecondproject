const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile');

provider = new HDWalletProvider(
  'bacon impose range champion green enemy broken stand hidden globe spice jazz',
  'https://rinkeby.infura.io/v3/a15699d14ba64e0c9bebad3971539ed6'
);

const web3 = new Web3(provider);

const deployemnt = async () => {
  //Get all accounts

  const accounts = await web3.eth.getAccounts();

  console.log('Contracts deployed from Account', accounts[0]);

  //deploy contract

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ['Hi There!'] })
    .send({ from: accounts[0], gas: '1000000' });

  console.log('Contracs deployed to', result.options.address);

  provider.engine.stop();
};

deployemnt();
