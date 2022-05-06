import styled from "styled-components";

const MenuContainer = styled.div`
    width: 30%;
    height: auto;
    display: block;
    position: fixed;
    bottom: 5%;
    left: 4%;

`

const MenuTitle = styled.h1`
    width: 100px;
    height: 45px;
    font-family: 'Jomolhari', serif;
    font-size: 40px;
    color: #ABABAB;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 6px;

    MenuTitle:hover {
        color: black;
    }

    

`

const Menu = () => {
   return (
    <>
    <MenuContainer>
        <a href="/"><MenuTitle>Home</MenuTitle></a>
        <a href="/About"><MenuTitle>About</MenuTitle></a>
        <a href="/Mint"><MenuTitle>Mint</MenuTitle></a>
        <a href="/Team"><MenuTitle>Team</MenuTitle></a>
        <a href="/Roadmap"><MenuTitle>Roadmap</MenuTitle></a>
    </MenuContainer>
    </>
   )
}

export default Menu;