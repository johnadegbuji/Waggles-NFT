import WagglesAbi from "./WagglesAbi.json";
import ethers from 'ethers';
 
const contractAddress = 
//Rinkeby
'0x14d44D677EcEC3246d5b8e8ac6b543C4Da5B0152';

const getContract = (account, provider) => {
  
  const signer = provider.getSigner(account)
  var contract = new ethers.Contract(contractAddress, WagglesAbi.abi, signer)
  
  return contract
}

export default getContract;

