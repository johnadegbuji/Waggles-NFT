import { useState, useEffect } from 'react';
import styled from "styled-components";
import Header from '../components/Header.jsx';
import Link from 'next/link'
import SocialMediaFooter from '../components/SocialMediaFooter';
import { ethers } from "ethers";




const MenuContainer = styled.div`
    width: 30%;
    height: auto;
    display: block;
    position: fixed;
    bottom: 8%;
    left: 4%;
    z-index: 1;

`

const MenuTitle = styled.h1`
    width: 100px;
    height: 45px;
    font-family: 'Jomolhari', serif;
    font-size: 28px;
    color: #ABABAB;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 6px;
    cursor: pointer;


    MenuTitle:hover {
        color: black;
    }

`

const Container = styled.div`
    width: 40%;
    height: 30%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;

`

const MintContainer = styled.div`
    display: flex;

`
const HeadingTitle = styled.h1`
    font-size: 29px;
    width: 100%;
    text-align: center;
    font-family: 'Jomolhari', serif;
    letter-spacing: 3px;

`

const SubText = styled.h4`
    font-size: 14px;
    text-align: center;
    font-family: 'Jomolhari', serif;


`
const MintButton = styled.button`
    width: 150px;
    height: 45px;
    border-radius: 5px;
    border: white;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    font-size: 18px;
    color: #F3E462;
    background-color: black;
    letter-spacing: 2px;
    font-family: 'Josefin Sans', sans-serif;
    cursor: pointer;
`
const ConnectButton = styled.button`
    font-family: 'Josefin Sans', sans-serif;   
    width: 150px;
    height: 45px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 18px;
    font-size: 16px;
    background-color: #F3E462;
    letter-spacing: 2px;
    cursor: pointer;

`

const DisconnectButton = styled.button`
    font-family: 'Josefin Sans', sans-serif;   
    width: 150px;
    height: 45px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 18px;
    font-size: 16px;
    background-color: #F3E462;
    letter-spacing: 2px;
    cursor: pointer;

`



export default function Mint() {
    
    const activateMetamask = async () => {
        if(window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            setIsConnected(true);
        } else{
            alert("Please install metamask!");
          }
      }

    const [isConnected, setIsConnected] = useState(false);
    
    return (
      <>
      <Header></Header>
      <MenuContainer>
      <Link href="/"><MenuTitle>Home</MenuTitle></Link>
      <Link href="/About"><MenuTitle >About</MenuTitle></Link>
      <Link href="/Mint"><MenuTitle style={{color:"black"}}>Mint</MenuTitle></Link>
      <Link href="/Team"><MenuTitle>Team</MenuTitle></Link>
      <Link href="/Roadmap"><MenuTitle>Roadmap</MenuTitle></Link>
      </MenuContainer> 
      <Container>
        <HeadingTitle>MINT A WAGGLE</HeadingTitle>
        <SubText style={{textAlign: "center"}}>Each Waggle NFT will be minted on the Ethereum blockchain.</SubText>
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
            {!isConnected ? <ConnectButton onClick={() => activateMetamask()}>CONNECT</ConnectButton> : <DisconnectButton onClick={() => activateMetamask()}>DISCONNECT</DisconnectButton>}
            <MintButton>MINT</MintButton>
        </MintContainer>
      </Container> 
      <SocialMediaFooter></SocialMediaFooter>
      </>
    )
  }