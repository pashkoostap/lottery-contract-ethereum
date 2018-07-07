const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const { interface, bytecode } = require('./compile');
const {
  LOCAL_PROVIDER_URL,
  RINKEBY_PROVIDER_URL,
  MNEMONIC_PHRASE
} = require('./config');

const provider = new HDWalletProvider(MNEMONIC_PHRASE, LOCAL_PROVIDER_URL);

const _web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await _web3.eth.getAccounts();
  const contract = await new _web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  console.log(contract);
  process.exit(0);
};
deploy();
