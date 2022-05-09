import styled from "styled-components";
import Header from '../components/Header.jsx';
import Link from 'next/link'
import SocialMediaFooter from '../components/SocialMediaFooter';
import SimpleAccordion from "../components/Accordian.jsx";


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
const RoadmapTitle = styled.h1`
    width: 70%;
    height: auto;
    font-family: 'Jomolhari', serif;
    font-size: 42px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

`

const RoadmapDescription = styled.p`
    width: 50%;
    height: auto;
    font-family: 'Jomolhari', serif;
    font-size: 18px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 7%;

`

export default function Roadmap() {
    return (
      <>
        <Header></Header>
        <MenuContainer>
        <Link href="/"><MenuTitle>Home</MenuTitle></Link>
        <Link href="/About"><MenuTitle>About</MenuTitle></Link>
        <Link href="/Mint"><MenuTitle>Mint</MenuTitle></Link>
        <Link href="/Team"><MenuTitle>Team</MenuTitle></Link>
        <Link href="/Roadmap"><MenuTitle style={{color:"black"}}>Roadmap</MenuTitle></Link>
        </MenuContainer>

        <RoadmapDescription>
          The Roadmap for anything and everything that is a part of The Good of
          the Hive is the same. Continue to change paradigms and raise
          consciousness around the idea that we are all more connected to each
          other and the planet than we realize. We are all one hive.
          <br></br><br></br>
          “My intention has always been to build The Good of the Hive to be of
          more and more service in different ways over time. As this hive of bees
          expands, so does the potential for reaching more people.
          <br></br><br></br>
          There are many places I would like to bring a mural that have, until
          now, simply not been possible. As a part of the Roadmap of success for
          the Waggle collection, I am offering at least two murals in parts of the
          world that would otherwise not be able to participate because of
          financial reasons. That equals 12- 16 weeks of time on my part in
          addition to the costs of creating the piece in what will likely be a
          relatively remote part of the world. In addition to signing the murals, I
          will hand-paint one of the Waggles in the corner so everyone will know
          that you helped make that mural happen. The locations will be chosen
          from inquiries I have received or receive in the coming months. They will
          be invited to participate at no cost to their community, courtesy of the
          Waggles.. and you.”
          <br></br><br></br>
          - Matt Willey
        </RoadmapDescription>
        <SocialMediaFooter></SocialMediaFooter>
      </>
    )
  }