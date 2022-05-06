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
    font-size: 32px;
    color: #ABABAB;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 6px;

    MenuTitle:hover {
        color: black;
    }

    

`

export default function Team() {
    return (
      <>
        <Header></Header>
        <MenuContainer>
        <a href="/"><MenuTitle>Home</MenuTitle></a>
        <a href="/About"><MenuTitle>About</MenuTitle></a>
        <a href="/Mint"><MenuTitle>Mint</MenuTitle></a>
        <a href="/Team"><MenuTitle style={{color:"black"}}>Team</MenuTitle></a>
        <a href="/Roadmap"><MenuTitle>Roadmap</MenuTitle></a>
      </MenuContainer>
      <SocialMediaFooter></SocialMediaFooter>
      </>
    )
  }