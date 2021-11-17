require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note outside pumpkin grace neck equal genius'; 
let testAccounts = [
"0x0895c73fe035a5c89d6c48a905b6058982fdf07f069372647f7e8cecaab0df19",
"0xfbf28db26c14a2c1b12f206642917534a3f95617c9aefbaeac13e4ea9957a98f",
"0x1bf3fe0d3c31311e407b6d0ef376e5e9eeb7dc9469cbb71778b286ca889c9a0a",
"0xd8f29d5404726875a5473f85aeb07301cfca9561882f5db15471b1dc6809245e",
"0x5625224d70e0739af3b056173efa831598806b7d97baaba25884e37735cfcd2c",
"0x6b508112787d7a9e776e418ed4f6c2df0e64d3f07ba241e8f4e4abd3eea5c96c",
"0xe347911bc898fa6771fa0d75d48a9f05116e292fe3b026f9d2f1d45bac6f3126",
"0x339ea1e75b1b7d40c70e515b217aaa9e665f5464f9128038cbaa8aba4be80834",
"0x7b2b450fe376e265ecaa23d674826c50997921c0e2e440cd25fcd79c4107f090",
"0x99022517982881faa2f157c44c69b67484af4bcb9eeb2cc9442974db94973d62"
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

