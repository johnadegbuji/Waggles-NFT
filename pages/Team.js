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
const TeamImage = styled.img`
    width: 300px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;

`
const TeamName = styled.h4`
  font-family: 'Jomolhari', serif;
  font-size: 16px;
  margin-top: -15px;
`

const Description = styled.h4`
  width: 300px;
  font-family: 'Jomolhari', serif;
  font-size: 12px;
  margin-top: -25px;
  padding: 20px;




`

const TeamContainer = styled.div`
    width: 50%;
    height: 250px;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;

`
const InnerTeamContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

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
      
      <TeamContainer>
        <div className="left">
          <InnerTeamContainer>
            <TeamImage></TeamImage>
            <TeamName>FOUNDER/ARTIST</TeamName>
            <Description>Artist Matt Willey received a BFA from the School of the Museum of Fine Arts, Boston and Tufts University in 1993. He has been painting murals for nearly 30 years. He founded The Good of the Hive in 2015 and has been painting pollinators ever since.</Description>

            <TeamImage></TeamImage>
            <TeamName>DEVELOPER</TeamName>
            <Description>Developer John Adegbuji also owner of "OpenSpaces" NFT Agency. He has been developing websites, applications, and contracts in the Web 2 and Web 3 spaces for 6+ years. 
             </Description>

          </InnerTeamContainer>
        </div>
        <div className="right">
        <InnerTeamContainer>
          <TeamImage></TeamImage>
          <TeamName>MARKETING</TeamName>
          <Description>Matt Macomber (aka Maeko) is...
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Description>


          <TeamImage></TeamImage>
          <TeamName>COMMUNITY</TeamName>
          <Description>
            Each place that participates in The Good of the Hive becomes a part of
            this growing hive of 50,000. It was very intentional to invite the
            Web3/crypto community into The Good of the Hive. The people are
            what give this project life. The Good of the Hive is a celebration of the
            power in people connecting. It is about the potential for change that is
            within every person at every age and in every corner of the world. The
            uncharted territory of Web3 seemed a perfect place to have the bees
            fly in and see what is there.
          </Description>

        </InnerTeamContainer>
        </div>
        </TeamContainer>
      <SocialMediaFooter></SocialMediaFooter>
      </>
    )
  }