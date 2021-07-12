require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name rebel still hour install glide equal ghost'; 
let testAccounts = [
"0xf2eced0afec708131de25c9d202d5b1e0de2c3aec760048093d2c101e3aa0c3e",
"0xc3da2582d93e65da1ac2d96d2d6b47ad120989adc54cd2ecf685d2b4e09d41b0",
"0xa2255ea9e778d5e6318d906971195cbda2a234326cbce4cd1e220a3841c15346",
"0x9e836ef9ebf78fdfba1de905fb670f5f8dfba6d6e9441c5a88bf1e5f03e16a7a",
"0x91fbc1411e4544c0ca34ff8206b0e25f17bfb5ed03e3ba4e5c6a4af395f4f88a",
"0xa335fcfa16e77e7d7ade30bb8810ca2fd87a0260e9e1eacaa7579e5feeb64224",
"0xaf53213075d9fa7ad4d1ecf4eeae200af1f384a12726a2ad340aea6de6b32cf6",
"0x9d445e6821926558cee1eb4cf625c56eaac3ecc6a6553b3b3b906fc42d960302",
"0xc0578a5c8d03730ca8dfdd9ac6fb25b0ee7f9a254477737ed671713a7fbb9536",
"0x91be0d7875760b6f351add05e8f973e97f93611e2b1aa09caa63298e8d20fb3d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

