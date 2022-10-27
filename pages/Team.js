import styled from "styled-components";
import Header from '../components/Header.jsx';
import Link from 'next/link'
import SocialMediaFooter from '../components/SocialMediaFooter';
import Navigation from '../components/Navigation'


const TeamImage = styled.img`
    width: 200px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;

`
const TeamName = styled.h4`
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 600;
  margin-top: 0px;
  width: 100%;
  text-align: center;

`

const Description = styled.h4`
  width: 85%;
  font-family: 'Poppins';
  font-weight: 300;
  font-size: 11px;
  margin-top: -25px;
  padding: 20px;

`

const TeamContainer = styled.div`
    width: 65%;
    height: auto;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (min-Width: 768px) and (max-Width: 991px) {
      width: 95%;
    }


`
const InnerTeamContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    align-content: center;

    @media only screen and (min-Width: 768px) and (max-Width: 991px) {
      width: 95%;
    }

    @media only screen and (max-Width: 767px){
      flex-direction: column;
      align-items: center;
      align-content: center;
    }

    `
const TeamMemberContainer = styled.div`
    display: flex;
    width: 33%;
    height: auto;
    flex-wrap: no-wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    @media only screen and (max-Width: 767px){
      width: 100%;
    }
`

    const Logo = styled.img`
    margin-top: 30px;
    width: 100px;
    height: 100px;

`

export default function Team() {
    return (
      <>
      <Navigation></Navigation>
      <TeamContainer>
          <InnerTeamContainer>
            <TeamMemberContainer>
              <TeamImage src="/matt.png"></TeamImage>
              <TeamName>FOUNDER/ARTIST</TeamName>
              <Description>Artist Matt Willey received a BFA from the School of the Museum of Fine Arts, Boston and Tufts University in 1993. He has been painting murals for nearly 30 years. He founded The Good of the Hive in 2015 and has been painting pollinators ever since.</Description>
            </TeamMemberContainer>
           

            <TeamMemberContainer>
              <TeamImage src="/Community.png"></TeamImage>
              <TeamName>COMMUNITY</TeamName>
              <Description>
                Each place that participates in The Good of the Hive becomes a part of this
                growing hive of 50,000. It was very intentional to invite the Web3/crypto
                community into The Good of the Hive. The people are what give this project life.
                It is about the potential for change that is within every person at every age and in
                every corner of the world. The uncharted territory of Web3 seemed a perfect
                place to have the bees fly in and see what is there.
              </Description>
            </TeamMemberContainer>

            <TeamMemberContainer>
              <TeamImage src="/tox.png"></TeamImage>
              <TeamName>DEVELOPER</TeamName>
              <Description>Developer TOX owner of <b><u><a href="https://openspaces.design">OpenSpaces NFT Agency</a></u></b> in Los Angeles has been developing websites, applications, and smart contracts in the Web2/Web3 spaces for 6+ years. 
              </Description>
            </TeamMemberContainer>
            

          </InnerTeamContainer>        
        </TeamContainer>
      <SocialMediaFooter></SocialMediaFooter>
      </>
    )
  }