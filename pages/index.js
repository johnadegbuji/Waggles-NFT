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

const NftGallery = styled.div`

    width: 40%;
    height: 40vh;
    margin-top: 15%;
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
  width: 125px;
  height: 125px;
  margin-top: 3%;

`

export default function Home() {
  return (
    <div className="pageWrapper">
      <Header></Header>
      <MenuContainer>
        <Link href="/"><MenuTitle style={{color:"black"}}>Home</MenuTitle></Link>
        <Link href="/About"><MenuTitle>About</MenuTitle></Link>
        <Link href="/Mint"><MenuTitle>Mint</MenuTitle></Link>
        <Link href="/Team"><MenuTitle>Team</MenuTitle></Link>
        <Link href="/Roadmap"><MenuTitle>Roadmap</MenuTitle></Link>
      </MenuContainer>
      <NftGallery>
        <NftImage src="/waggle1.png"></NftImage>
        <NftImage src="/waggle3.png"></NftImage>
        <NftImage src="/waggle4.png"></NftImage>
        <NftImage src="/waggle2.png"></NftImage>
        <NftImage src="/waggle6.png"></NftImage>
        <NftImage src="/waggle8.png"></NftImage>
        <NftImage src="/waggle9.png"></NftImage>
        <NftImage src="/waggle11.png"></NftImage>
        <NftImage src="/waggle12.png"></NftImage>
        <NftImage src="/waggle13.png"></NftImage>
        <NftImage src="/waggle8.png"></NftImage>
        <NftImage src="/waggle8.png"></NftImage>
      </NftGallery>
      <SocialMediaFooter></SocialMediaFooter>
    </div>
    )
}
