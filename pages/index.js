import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import styled from "styled-components";
import Header from '../components/Header.jsx';
import SocialMediaFooter from '../components/SocialMediaFooter';


const MenuContainer = styled.div`
    width: 30%;
    height: auto;
    display: block;
    position: fixed;
    bottom: 28.5%;
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

const NftGallery = styled.div`

    width: 50%;
    height: 425px;
    margin-top: 4%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 8%;
    display: flex;
    left: 0;
    right: 0;
    bottom: 25%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    align-items: center;

`
const NftImage = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 3%;

`
const Logo = styled.img`
    margin-top: 30px;
    width: 100px;
    height: 100px;

`

const Title = styled.h1`
    font-family: 'Poppins';
    font-weight: 600;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    height: 30px;
    `
const Subtitle = styled.h1`
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 400;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

`


export default function Home() {
  return (
    <div className="pageWrapper">
      <MenuContainer>
        <Logo src="/logo.png"></Logo>
        <Link href="/"><MenuTitle style={{color:"black"}}>Home</MenuTitle></Link>
        <Link href="/About"><MenuTitle>About</MenuTitle></Link>
        <Link href="/Mint"><MenuTitle>Mint</MenuTitle></Link>
        <Link href="/Team"><MenuTitle>Team</MenuTitle></Link>
        <Link href="/Roadmap"><MenuTitle>Roadmap</MenuTitle></Link>
      </MenuContainer>
      <Title>The Waggles</Title>
      <Subtitle>by The Good of the Hive</Subtitle>
      <NftGallery>
        <NftImage src="/waggle3.png"></NftImage>
        <NftImage src="/waggle54.png"></NftImage>
        <NftImage src="/waggle109.png"></NftImage>
        <NftImage src="/waggle129.png"></NftImage>
        <NftImage src="/waggle254.png"></NftImage>
        <NftImage src="/waggle671.png"></NftImage>        
      </NftGallery>
      <SocialMediaFooter></SocialMediaFooter>
    </div>
    )
}
