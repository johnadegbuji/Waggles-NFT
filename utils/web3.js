import Web3 from "web3";

let web3;

try {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    web3 = new Web3(window.ethereum);
  } else {
    const provider = new Web3.providers.HttpProvider(
      "https://rinkeby.infura.io/v3/06241ee1b6684b288ad53a56c7086150"
    );
    web3 = new Web3(provider);
  }

} catch (e) {
  console.error(e);
}

export default web3;

