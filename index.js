const InputDataDecoder = require('ethereum-input-data-decoder');
const exchange0xAbi = require('./abi');

const decoder = new InputDataDecoder(exchange0xAbi);

// marketSellOrders call
// https://etherscan.io/tx/0xc79ee30142e935453eabd57f45e01bb394bff78d05cdf8df97631b03ad6cc0cd
const input = '0x7e1d98080000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000002386f26fc1000000000000000000000000000000000000000000000000000000000000000002e0000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000006f02e6d47147b4448fe2f2eb25b4f534cf110c230000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a258b39954cef5cb142fd567a46cddb31a67012400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000410d586a20a4bffff50000000000000000000000000000000000000000000000005e05647aedbbd45000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005d7872020000000000000000000000000000000000000000000000000000016d1e79ae50000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001e00000000000000000000000000000000000000000000000000000000000000024f47261b000000000000000000000000089d24a6b4ccb1b6faa2625fe562bdd9a23260359000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024f47261b0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000421b82e97aa18170e6b81ce3a829d77b7067cf3644c8706e97e7c96d5a92de61eb0c5c5aeb4fbfadca6b9fbc5adff91bfb32964aa9e1bf8309dad7e1bd3e45f0b44c03000000000000000000000000000000000000000000000000000000000000';

const decoded = decoder.decodeData(input);

console.log(decoded);
