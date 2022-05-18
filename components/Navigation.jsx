import React, {useState} from 'react';
import styled from "styled-components";
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useMediaQuery } from 'react-responsive'


const MenuToggle = styled.img`
display: none;

@media only screen and (min-Width: 768px) and (max-Width: 991px) {
  width: 35px;
  height: 35px;
  position: absolute;
  display: block;
  top: 5%;
  right: 4%;
  left: auto;
  z-index: 1;


}
@media only screen and (max-Width: 767px){
  width: 25px;
  height: 25px;
  position: absolute;
  display: block;
  top: 2%;
  right: 4%;
  left: auto;
  z-index: 1;

}
`

const MenuTitle = styled.h1`
    width: 100px;
    height: 40px;
    font-family: 'Poppins', serif;
    font-weight: 500;
    font-size: 21px;
    color: #ABABAB;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 6px;
    cursor: pointer;

    MenuTitle:hover {
        color: black;
    }

    @media only screen and (min-Width: 768px) and (max-Width: 991px) {
      width: 90%;
      height: 45px;
      font-weight: 500;
      font-size: 18px;
      text-align: left;
    
    }

    @media only screen and (max-Width: 767px){
      width: 90%;
      height: 25px;
      font-weight: 500;
      font-size: 14px;
      
    }

`
const Logo = styled.img`
    margin-top: 30px;
    width: 100px;
    height: 100px;
    
    @media only screen and (min-Width: 768px) and (max-Width: 991px) {
      width: 75px;
      height: 75px;
      display: block;
      margin-left: 0px;
      margin-right: auto;

    
    }

    @media only screen and (max-Width: 767px){
    width: 50px;
    height: 50px;
    
    }
`

function Navigation(props){

const [menuOpen, setMenuOpen] = useState(false);

const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

const toggleMenu = () => {

    if (menuOpen) {
      setMenuOpen(false);
      console.log(menuOpen);
    } else if (!menuOpen) {
      setMenuOpen(true);
      console.log(menuOpen);

    }
}

let menu;

if (menuOpen){
    menu = 
    
    <div className={styles.menuContainer}>
        <Logo src="/logo.png"></Logo>
        <Link href="/"><MenuTitle>Home</MenuTitle></Link>
        <Link href="/About"><MenuTitle>About</MenuTitle></Link>
        <Link href="/Mint"><MenuTitle>Mint</MenuTitle></Link>
        <Link href="/Team"><MenuTitle>Team</MenuTitle></Link>
        <Link href="/Roadmap"><MenuTitle>Roadmap</MenuTitle></Link>
    </div>
} else if (!menuOpen && isDesktopOrLaptop ) {
    menu = <div className={styles.menuContainer}>
        <Logo src="/logo.png"></Logo>
        <Link href="/"><MenuTitle>Home</MenuTitle></Link>
        <Link href="/About"><MenuTitle>About</MenuTitle></Link>
        <Link href="/Mint"><MenuTitle>Mint</MenuTitle></Link>
        <Link href="/Team"><MenuTitle>Team</MenuTitle></Link>
        <Link href="/Roadmap"><MenuTitle>Roadmap</MenuTitle></Link>
    </div>
}

return (
    <>
        <MenuToggle style={{marginTop: props.top}} src="/menu-icon.png" onClick={() => toggleMenu()}></MenuToggle>
        {menu}
    </>
    )
}

export default Navigation