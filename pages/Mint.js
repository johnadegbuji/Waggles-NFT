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
    bottom: 16.5%;
    left: 4%;
    z-index: 1;
`

const MenuTitle = styled.h1`
    width: 100px;
    height: 45px;
    font-family: 'Poppins', serif;
    font-weight: 500;
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
    margin-top: 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;

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
`

const SubText = styled.h4`
    font-size: 12px;
    text-align: center;
    font-family: 'Poppins', serif;
    font-weight: 400;

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
`

const DisconnectButton = styled.button`
    font-family: 'Poppins', sans-serif;   
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
const Logo = styled.img`
    margin-top: 30px;
    width: 100px;
    height: 100px;

`
const NftImage = styled.img`
  width: 135px;
  height: 135px;
  margin-top: 0%;
  margin-left: auto;
  margin-right: auto;

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
      <Logo src="/logo.png"></Logo>
      <Link href="/"><MenuTitle>Home</MenuTitle></Link>
      <Link href="/About"><MenuTitle >About</MenuTitle></Link>
      <Link href="/Mint"><MenuTitle style={{color:"black"}}>Mint</MenuTitle></Link>
      <Link href="/Team"><MenuTitle>Team</MenuTitle></Link>
      <Link href="/Roadmap"><MenuTitle>Roadmap</MenuTitle></Link>
      </MenuContainer> 
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
            {!isConnected ? <ConnectButton onClick={() => activateMetamask()}>CONNECT</ConnectButton> : <DisconnectButton onClick={() => activateMetamask()}>DISCONNECT</DisconnectButton>}
            <MintButton>MINT</MintButton>
        </MintContainer>
      </Container> 
      <SocialMediaFooter></SocialMediaFooter>
      </>
    )
  }