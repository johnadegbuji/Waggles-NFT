import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {useMediaQuery} from 'react-responsive'


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
  
  <div className={styles.menuContainer}>
      <img src="/logo.png"></img>
      <Link href="/"><h1 className={styles.MenuTitle}>Home</h1></Link>
      <Link href="/About"><h1 className={styles.MenuTitle}>About</h1></Link>
      <Link href="/Mint"><h1 className={styles.MenuTitle}>Mint</h1></Link>
      <Link href="/Team"><h1 className={styles.MenuTitle}>Team</h1></Link>
      <Link href="/Roadmap"><h1 className={styles.MenuTitle}>Roadmap</h1></Link>
  </div>

} else if (!menuOpen && isDesktopOrLaptop ) {
  
  menu = 
  
  <div className={styles.menuContainer}>
      <img src="/logo.png"></img>
      <Link href="/"><h1 className={styles.MenuTitle}>Home</h1></Link>
      <Link href="/About"><h1 className={styles.MenuTitle}>About</h1></Link>
      <Link href="/Mint"><h1 className={styles.MenuTitle}>Mint</h1></Link>
      <Link href="/Team"><h1 className={styles.MenuTitle}>Team</h1></Link>
      <Link href="/Roadmap"><h1 className={styles.MenuTitle}>Roadmap</h1></Link>
  </div>

} else if (!menuOpen){
  
  menu = null;

}

return (
    <>
        <img className={styles.MenuToggle} style={{marginTop: props.top}} src="/menu-icon.png" onClick={() => toggleMenu()}></img>
        {menu}
    </>
    )
}

export default Navigation