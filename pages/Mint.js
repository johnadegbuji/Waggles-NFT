import { useState, useEffect } from 'react';
import styled from "styled-components";
import styles from '../styles/Home.module.css'
import Header from '../components/Header.jsx';
import SocialMediaFooter from '../components/SocialMediaFooter';
import web3 from "../utils/web3";
import WagglesAbi from "../utils/WagglesAbi.json";
import Navigation from '../components/Navigation.jsx';


const Container = styled.div`
    width: 40%;
    height: 30%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (min-Width: 768px) and (max-Width: 991px) {
    
    }

    @media only screen and (max-Width: 767px){
        width: 70%;
        margin-top: 25%;

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




export default function Mint() {

    const [chainId, setChainId] = useState(null);

    useEffect(() => {
        getAllAccounts();
        getNftPrice();
        getRemainder();
        getNetworkId();
    }, [chainId])
    
   
    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount] = useState();
    const [price, setPrice] = useState();
    const [remaining, setRemaining] = useState();
    const [displayPrice, setDisplayPrice] = useState();

    const contractAddress = "0xbb055F2db23864a16f922b564D22d89Dd76737d1";
    const instance = new web3.eth.Contract(WagglesAbi.abi, contractAddress);
    const contractChainId = 4;
    
    const activateMetamask = async () => {
        if (window.ethereum){
            ethereum.request({ method: 'eth_requestAccounts' });
            setIsConnected(true);
        } else if (isConnected){
            alert("You are already connected :)");
          }
          else if(!window.ethereum) {
            alert("Please download the Metamask wallet extension");
          }
     }

     const getNetworkId = async () => {
        const currentChainId = await web3.eth.net.getId()
        console.log(currentChainId);
        setChainId(currentChainId);

        if (chainId !== contractChainId){
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: web3.utils.toHex(contractChainId) }]
            });    
        } 
            

      }

    const getAllAccounts = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        setAccount(account);
    }

    const getNftPrice = async () => {
        const price =  await instance.methods.price().call();
        const displayPrice = web3.utils.fromWei(price, 'ether');
        setPrice(price);
        setDisplayPrice(displayPrice);
    }

    const getRemainder = async () => {
        const totalSupply = await instance.methods.totalSupply().call();
        const remainder = 1001 - totalSupply;
        setRemaining(remainder);
    }

    const mintWaggle = async () =>  {
        if (chainId == contractChainId){
        await instance.methods.publicMint(1).send({from: account, value: price});
        } 
        else {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: contractChainId
        });

        await instance.methods.publicMint(1).send({from: account, value: price});
        }
    }
    
    return (
      <>
      <Navigation></Navigation>
      <Container>
        <img className={styles.NftImage} src="/waggle394.png"></img>
        <HeadingTitle>MINT A WAGGLE</HeadingTitle>
        <SubText style={{textAlign: "center", marginTop:"35px"}}>Each Waggle NFT will be minted on the Ethereum blockchain.</SubText>
        <MintContainer>
            <div className="left">
                <HeadingTitle>{remaining}</HeadingTitle>
                <SubText>(REMAINING)</SubText>
            </div>
            <div className="right">
                <HeadingTitle>{displayPrice}</HeadingTitle>
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