import WagglesAbi from "./WagglesAbi.json";
import ethers from 'ethers';
 
const contractAddress = 
//Rinkeby
'0xbb055F2db23864a16f922b564D22d89Dd76737d1';

const getContract = (account, provider) => {
  
  const signer = provider.getSigner(account)
  var contract = new ethers.Contract(contractAddress, WagglesAbi.abi, signer)
  
  return contract
}

export default getContract;

