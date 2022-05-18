import { useState, useEffect } from 'react';
import styled from "styled-components";
import Header from '../components/Header.jsx';
import Link from 'next/link'
import SocialMediaFooter from '../components/SocialMediaFooter';
import {ethers}  from "ethers";
import WagglesAbi from "../utils/WagglesAbi.json";
import { useMediaQuery } from 'react-responsive'
import Navigation from '../components/Navigation.jsx';


const Container = styled.div`
    width: 40%;
    height: 30%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (min-Width: 768px) and (max-Width: 991px) {
    
    }

    @media only screen and (max-Width: 767px){
        width: 70%;

    }

`

const MintContainer = styled.div`
    display: flex;

`
const HeadingTitle = styled.h1`
    font-size: 32px;
    width: 100%;
    text-align: center;
    font-family: 'Poppins';
    font-weight: 600;
    letter-spacing: 3px;
    margin-bottom: -20px;

    @media only screen and (min-Width: 768px) and (max-Width: 991px) {
        font-size: 26px;
        margin-top: 5px;
        margin-bottom: -10px;

    }

    @media only screen and (max-Width: 767px){
        font-size: 21px;
        margin-top: 5px;
        margin-bottom: -10px;

    }
`

const SubText = styled.h4`
    font-size: 12px;
    text-align: center;
    font-family: 'Poppins', serif;
    font-weight: 400;

    @media only screen and (min-Width: 768px) and (max-Width: 991px) {
        font-size: 10px;
    }

    @media only screen and (max-Width: 767px){
        font-size: 10px;

    }

`
const MintButton = styled.button`
    width: 150px;
    height: 45px;
    border-radius: 5px;
    border-style: none;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    font-size: 21px;
    color: #F3E462;
    background-color: black;
    letter-spacing: 2px;
    font-family: 'Poppins';
    font-weight: 400;   
    cursor: pointer;

    @media only screen and (min-Width: 768px) and (max-Width: 991px) {
    
    }

    @media only screen and (max-Width: 767px){
    
    }
`
const ConnectButton = styled.button`
    font-family: 'Poppins';
    font-weight: 400;   
    width: 150px;
    height: 45px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 18px;
    font-size: 21px;
    background-color: #F3E462;
    letter-spacing: 2px;
    cursor: pointer;

    @media only screen and (min-Width: 768px) and (max-Width: 991px) {
    
    }

    @media only screen and (max-Width: 767px){
    
    }
`

const NftImage = styled.img`
  width: 135px;
  height: 135px;
  margin-top: 0%;
  margin-left: auto;
  margin-right: auto;

`


export default function Mint() {

    useEffect(() => {
    
    getAllAccounts();
    getNftPrice();
    }, [])
    
   
    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount] = useState();
    const [price, setPrice] = useState();
   
   
    const contractAddress = '0x14d44D677EcEC3246d5b8e8ac6b543C4Da5B0152';
    const url = "https://rinkeby.infura.io/v3/06241ee1b6684b288ad53a56c7086150";
    const provider = new ethers.providers.JsonRpcProvider(url);   
    const signer = provider.getSigner(account);
    const wagglesContract = new ethers.Contract(contractAddress, WagglesAbi.abi, signer);
   

    const activateMetamask = async () => {
        if (window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            await provider.send("eth_requestAccounts", []);
            setIsConnected(true);
        } else if (isConnected){
            alert("You are already connected :)");
          }
          else if(!window.ethereum) {
            alert("Please download the Metamask wallet extension");
          }
     }

    const getAllAccounts = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        console.log(account);
        setAccount(account);
    }

    const getNftPrice = async () => {
        const price = await wagglesContract.price();
        ethers.utils.parseEther((price).toString());
        console.log(price);
        setPrice(price);
    }
    

    const mintWaggle = async () =>  {
        await wagglesContract.publicMint(1),{
            value: ethers.utils.parseEther((price).toString()), 
            gasLimit: 5000000,}};
    
    return (
      <>
      <Header></Header>
      <Navigation></Navigation>
      <Container>
        <NftImage src="/waggle394.png"></NftImage>
        <HeadingTitle>MINT A WAGGLE</HeadingTitle>
        <SubText style={{textAlign: "center", marginTop:"35px"}}>Each Waggle NFT will be minted on the Ethereum blockchain.</SubText>
        <MintContainer>
            <div className="left">
                <HeadingTitle>1000</HeadingTitle>
                <SubText>(REMAINING)</SubText>
            </div>
            <div className="right">
                <HeadingTitle>.5 ETH</HeadingTitle>
                <SubText>(PRICE)</SubText>
            </div>
        </MintContainer>
        <MintContainer style={{flexDirection:"column"}}>
            <ConnectButton onClick={() => activateMetamask()}>CONNECT</ConnectButton>
            <MintButton onClick={() => mintWaggle()}>MINT</MintButton>
        </MintContainer>
      </Container> 
      <SocialMediaFooter></SocialMediaFooter>
      </>
    )
  }