import styled from "styled-components";
import Header from '../components/Header.jsx';
import SocialMediaFooter from '../components/SocialMediaFooter';
import Navigation from '../components/Navigation.jsx';

const MenuContainer = styled.div`
    width: 30%;
    height: auto;
    display: block;
    position: fixed;
    bottom: 16.5%;
    left: 4%;
    z-index: 1;

`

const MenuTitle = styled.h1`
    width: 100px;
    height: 45px;
    font-family: 'Poppins', serif;
    font-weight: 500;
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

const VideoContainer = styled.div`
    width: 50%;
    height: 45%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 8%;


    @media only screen and (min-Width: 992px) and (min-Height: 899px)  {
      height: 50%;
    }

    @media only screen and (min-Width: 992px) and (min-Height: 799px)  {
      height: 45%;
    }

    @media only screen and (min-Width: 768px) and (max-Width: 991px) {
      width: 90%;
      height: 425px;
      margin-top: 20%;

    }

    @media only screen and (max-Width: 767px){
      width: 90%;
      height: 325px;
      margin-top: 20%;
    }
`
const AboutText = styled.p`
    width: 50%;
    margin-top: 2%;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Poppins';
    font-weight: 300;
    font-size 12px;
    line-height: 19px;
    letter-spacing: 0.1em; 
    
    @media only screen and (min-Width: 768px) and (max-Width: 991px) {
      width: 90%;
      font-size 10px;
    }

    @media only screen and (max-Width: 767px){
      width: 90%;
      font-size 10px;

    }
`
const Logo = styled.img`
    margin-top: 30px;
    width: 70px;
    height: 70px;

`


export default function About() {
    return (
      <>
      <Navigation></Navigation>
      <div className="pageWrapper">
      <VideoContainer>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Xa-BCo1fnK8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </VideoContainer>
      <AboutText>
        These 1000 unique NFT Bees by artist Matt Willey are a rare collection of works
        offered as a part of his global art project The Good of the
        Hive.<span style={{color: "orange"}}><a href="https://thegoodofthehive.com"> TheGoodoftheHive.com</a></span>
        <br></br><br></br>
        The Good of the Hive is a multi-year, multi-continent project launched in 2015
        to raise awareness about the importance of pollinators. Willey uses the
        honeybee and her hive as a reminder that we are inextricably connected to
        each other and the planet just like a bee to her hive. Any sense of separation
        we feel is an illusion. We are one organism.        
        <br></br><br></br>
        The project, when completed, will consist of 50,000 hand-painted bees – the
        average number in a healthy hive. Over the last eight years, Willey has created
        36 mural installations in communities around the world. The bees in this
        collection bring the count to over 10,000.
        <br></br><br></br>

        <b><i><span style={{fontSize:"16px"}}>“The bee is the only creature I know of that we keep, but she remains wild. She
        is truly everyone’s. She is not bound by race, gender, age, nationality or
        political affiliation – none of the things that separate us. For this reason, she
        has the unique potential to not only become a universal symbol of connection,
        but also a real-life reminder of this fact in our daily lives.”</span><br></br><br></br> -Matt Willey</i></b>

        <br></br><br></br>
        Matt Willey has reached hundreds of thousands of people through his art. His
        murals often take months to complete, allowing students, teachers and the
        general public the opportunity to engage with the art and artist in real life. He
        has created large-scale works at Smithsonian’s National Zoo in Washington
        DC, Dag Hammarskjold Plaza in NYC, and Burt’s Bees Global Headquarters. He
        has collaborated with the World Council of Peoples for the United Nations
        (WCPUN) and NYC Parks’ Art in the Parks Public Art Program. He has painted in
        a Tony-Winning Broadway star’s dressing room, at a fire station in the
        American south, at schools from the US to the UK and his bees were recently
        displayed at the American Embassy in Beijing, China.
        <br></br><br></br>
        Willey has shared the stories of his work through speaking engagements at the
        United Nations, the FAO in Washington DC, the German and French Embassies
        in DC, Smithsonian’s National Zoo, MIT, Duke University, Georgetown University,
        Auburn University, the Planetary Health Alliance annual meeting in Scotland,
        many podcasts including the NEA and educational institutions throughout the
        US.
        <br></br><br></br>
        His work has been featured in the New York Times, Reuters London, The
        Huffington Post, The Washington Post, The Today Show, Tedx and countless
        other publications and media channels.
      </AboutText>
      <SocialMediaFooter></SocialMediaFooter>
      </div>
      </>
    )
  }