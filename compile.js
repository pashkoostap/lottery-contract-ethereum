const path = require('path');
const fs = require('fs');
const solc = require('solc');

const InboxContractPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(InboxContractPath, 'utf8');
const compiledCode = solc.compile(source, 1);
const LotteryContract = compiledCode.contracts[':Lottery'];

module.exports = LotteryContract;
