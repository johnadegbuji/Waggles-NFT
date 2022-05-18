import Web3 from "web3";

let web3;

try {
    web3 = new Web3(
    new Web3.providers.HttpProvider(
      'https://rinkeby.infura.io/v3/76af76acd4fa47f99214ad183eb4f145'
      )
    );

} catch (e) {
  console.error(e);
}

export default web3;
