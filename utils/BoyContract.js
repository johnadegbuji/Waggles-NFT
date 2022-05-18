import WagglesAbi from "./WagglesAbi.json";
import { Contract } from '@ethersproject/contracts'
 
const contractAddress = 
//Rinkeby
'0x14d44D677EcEC3246d5b8e8ac6b543C4Da5B0152'

export const getContract = (account, provider) => {
  
  const signer = provider.getSigner(account)
  var contract = new Contract(contractAddress, WagglesAbi.abi, signer)
  return contract
}
