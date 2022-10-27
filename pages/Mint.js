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
        width: 75%;

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
        width: 75%;

    }
`




export default function Mint() {
    const contractChainId = 1;
    const [chainId, setChainId] = useState(null);

    
    useEffect(() => {
        // getAllAccounts();
        isMetamaskInstalled();
        getNetworkId();
        getNftPrice();
        getRemainder();
        isSaleActive();
        
    }, [chainId])
    
   
    const [isConnected, setIsConnected] = useState(false);
    const [isMetaInstalled, setIsMetaInstalled] = useState(false);
    const [connectText, setConnectText] = useState("Connect")
    const [account, setAccount] = useState();
    const [price, setPrice] = useState();
    const [remaining, setRemaining] = useState();
    const [displayPrice, setDisplayPrice] = useState();
    const [message, setMessage] = useState("");
    const [saleActive, setSaleActive] = useState();
 
    const contractAddress = "0x1510d6beDdA5B3f7cc144F5444C4d745176F21aB";
    const instance = new web3.eth.Contract(WagglesAbi.abi, contractAddress);
        
    const activateMetamask = async () => {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            .then (
                console.log("connect attempt made"),
                setIsConnected(true),
                setConnectText("Connected"),
            
            )
            .catch((err) => {
                if (err.code === 4001) {
                  console.log("User denied account connection"),
                  setConnectText("Connect"),
                  setMessage("Please connect to MetaMask.")
                } else {
                  console.error(err);
                  setConnectText("Connect"),
                  setMessage("Please connect to MetaMask.")
                }
              });

        const account = accounts[0];
        console.log("account connected:" + account);
        setAccount(account);
        setMessage(account);

    }
    const isMetamaskInstalled = async () => {
        if (window.ethereum == undefined) {
            setIsMetaInstalled(false);
            setMessage("Please install Metamask first");
        } 
        else {
            setIsMetaInstalled(true);
            setMessage("Please connect a wallet");

        }
    }
     const getNetworkId = async () => {
        let currentChainId = await web3.eth.net.getId()
        setChainId(currentChainId);
        console.log("on load chain is:" + currentChainId);

        try {
            if (chainId !== contractChainId){
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: web3.utils.toHex(contractChainId) }]
                });
                let currentChainId = await web3.eth.net.getId()
                setChainId(currentChainId);
                }
            
          } catch (error) {

          }
      }


    const getAllAccounts = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        setAccount(account);
    }

    const getNftPrice = async () => {

        if (isMetaInstalled){
        const price =  await instance.methods.price().call();
        const displayPrice = web3.utils.fromWei(price, 'ether');
        setPrice(price);
        setDisplayPrice(displayPrice);
        } else {
            const price = "???";
            setDisplayPrice(price);
        }
    }

    const getRemainder = async () => {
        if (isMetaInstalled){
        const totalSupply = await instance.methods.totalSupply().call();
        const remainder = 1000 - totalSupply;
        setRemaining(remainder);
        } else {
            const remainder = "???";
            setRemaining(remainder);
        }
    }

    const isSaleActive = async () => {
        if(isMetaInstalled){
            const isSaleActive = await instance.methods.saleActive().call();
            setSaleActive(isSaleActive);

        }

    }

    const mintWaggle = async () =>  {
        if (account !== undefined){
            if (chainId == contractChainId){
                await instance.methods.publicMint(1).send({from: account, value: price})
                .on('transactionHash', function(hash){
                    setMessage("Transaction pending. Please wait...");
                })
                .on('receipt', function(receipt){
                    setMessage("Thank you! View your Waggle on Opensea");
                }) 
                .on('error', function(receipt){
                    setMessage(receipt.message);

                })

            } else {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: contractChainId
                });
                await instance.methods.publicMint(1).send({from: account, value: price}).on('transactionHash', function(hash){
                    setMessage("Transaction pending. Please wait...");
                })
                .on('receipt', function(receipt){
                    setMessage("Thank you! View your now Waggle on Opensea");
                }) 
                .on('error', function(receipt){
                    setMessage(receipt.message);
                });
            }

        } else if (account == undefined) {
            setMessage("Please connect a wallet before minting.")

    } else if (!saleActive){
        setMessage("The sale is not live yet")
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
                <SubText>REMAINING</SubText>
            </div>
            <div className="right">
                <HeadingTitle>{displayPrice}</HeadingTitle>
                <SubText>PRICE(ETH)</SubText>
            </div>
        </MintContainer>
        <MintContainer style={{flexDirection:"column"}}>
            <ConnectButton onClick={() => activateMetamask()}>{connectText}</ConnectButton>
            <MintButton onClick={() => mintWaggle()}>MINT</MintButton>
            <SubText>{message}</SubText>
        </MintContainer>
      </Container> 
      <SocialMediaFooter></SocialMediaFooter>
      </>
    )
  }