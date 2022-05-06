import styled from "styled-components";
import Header from '../components/Header.jsx';
import Link from 'next/link'
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
    font-size: 32px;
    color: #ABABAB;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 6px;
    cursor: pointer;


    MenuTitle:hover {
        color: black;
    }

    

`

export default function Team() {
    return (
      <>
        <Header></Header>
        <MenuContainer>
        <Link href="/"><MenuTitle>Home</MenuTitle></Link>
        <Link href="/About"><MenuTitle>About</MenuTitle></Link>
        <Link href="/Mint"><MenuTitle>Mint</MenuTitle></Link>
        <Link href="/Team"><MenuTitle style={{color:"black"}}>Team</MenuTitle></Link>
        <Link href="/Roadmap"><MenuTitle>Roadmap</MenuTitle></Link>
      </MenuContainer>
      <SocialMediaFooter></SocialMediaFooter>
      </>
    )
  }