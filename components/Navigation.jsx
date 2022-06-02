import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {useMediaQuery} from 'react-responsive'
import AOS from "aos";
import FadeIn from 'react-fade-in';


let menu;

function Navigation(props) {

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

if (menuOpen){
  menu = 
  <div  className={styles.menuContainer}>
      <h1 className={styles.exitButton} onClick={() => toggleMenu()}>X</h1>
      <img className={styles.Logo} src="/CircleBee.png"></img>
      <FadeIn delay="100" childClassName="MenuTitle">
      <Link href="/"><h1 className={styles.MenuTitle}>Home</h1></Link>
      <Link href="/About"><h1 className={styles.MenuTitle}>About</h1></Link>
      <Link href="/Mint"><h1 className={styles.MenuTitle}>Mint</h1></Link>
      <Link href="/Team"><h1 className={styles.MenuTitle}>Team</h1></Link>
      <Link href="/Roadmap"><h1 className={styles.MenuTitle}>Roadmap</h1></Link>
      </FadeIn>

  </div>

} else if (!menuOpen && isDesktopOrLaptop ) {
  
  menu = 
  <>
  <img style={{marginLeft:"auto", marginRight:"auto", display:"block", width:"60px", height:"60px", position:"fixed", left:"2%", top:"0%"}} className={styles.Logo} src="/logo.png"></img>
  <div data-aos="fade-down" className={styles.menuContainer}>
      <Link href="/"><h1 className={styles.MenuTitle}>Home</h1></Link>
      <Link href="/About"><h1 className={styles.MenuTitle}>About</h1></Link>
      <Link href="/Mint"><h1 className={styles.MenuTitle}>Mint</h1></Link>
      <Link href="/Team"><h1 className={styles.MenuTitle}>Team</h1></Link>
      <Link href="/Roadmap"><h1 className={styles.MenuTitle}>Roadmap</h1></Link>
  </div>
  </>

} else if (!menuOpen){
  
  menu = null;

}
AOS.refresh();

return (
    <>
        <img className={styles.MenuToggle} style={{marginTop: props.top}} src="/menu-icon.png" onClick={() => toggleMenu()}></img>
        {menu}
    </>
    )
}

export default Navigation