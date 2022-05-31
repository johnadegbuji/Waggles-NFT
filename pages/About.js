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
    }

    @media only screen and (max-Width: 767px){
      width: 90%;
      height: 325px;
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
      <div className="pageWrapper">

      <Header></Header>
      <Navigation></Navigation>
      <VideoContainer>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Xa-BCo1fnK8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </VideoContainer>
      <AboutText>
        These 1000 unique Waggles by artist Matt Willey are a rare
        collection of bees offered as a part of his global art project The
        Good of the Hive. <span style={{color: "orange"}}><a href="https://thegoodofthehive.com">TheGoodoftheHive.com</a></span>
        <br></br><br></br>
        The Good of the Hive is a multi-year, multi-continent project based on the
        creation of 50,000 bees - the number in a healthy thriving hive – in murals and
        installations around the world. Seven years into an estimated 21-year project,
        Willey has created 35 murals and installations with over 9000 bees. 
        <br></br><br></br>
        The Waggles bring the count to over 10,000.
        <br></br><br></br>

        <b><i>“<span style={{fontSize:"16px"}}>The name Waggles is based on a behavior of the honeybee called the “waggle
        dance.” It’s a tool the bees use to communicate directional navigation to other
        members of the hive.”</span><br></br><br></br> -Matt Willey</i></b>

        <br></br><br></br>
        A personal experience with a honeybee in 2008 sparked a paradigm
        shift for Willey. He realized that human and planetary health are
        interconnected, although we rarely act like it. Our health, just like
        the bees, is directly connected to the health of our surroundings.
        The bees are a symbol the artist uses for people, trees, animals,
        pollinators, water, soil and everything in between.
        <br></br><br></br>
        <i>“The bee is the only creature I know of that we keep, but she remains
        wild. She is truly everyone’s. She is not bound by race, gender, age or
        nationality – none of the things that separate us.”
        - Matt Willey</i>
        <br></br><br></br>
        Matt Willey has reached hundreds of thousands of people through
        interactions IRL while painting bees. His murals often take months
        to complete, allowing students, teachers and the general public the
        opportunity to engage with the artist and his project. He has
        created large-scale works at the Smithsonian’s National Zoo in
        Washington DC, <span style={{color: "orange"}}><a href="https://www.thegoodofthehive.com/colony-expanse-installation-at-dag-hammarskjold-plaza-nyc">Dag Hammarskjold Plaza in NYC</a></span> and Burt’s Bees
        Global Headquarters. He has collaborated with the World Council
        of Peoples for the United Nations (WCPUN) and NYC Parks’ Art in
        the Parks Public Art Program. He has painted in a Tony-Winning
        Broadway star’s dressing room in NYC, at a fire station in the
        American south and at schools across the country and in the UK.
        From October of 2021 – April of 2022 his bees were displayed at the
        American Embassy in Beijing, China.
        <br></br><br></br>
        Willey has shared the stories of The Good of the Hive through
        speaking engagements at the United Nations, the FAO in
        Washington DC, the German and French Embassies in DC, <span style={{color: "orange"}}><a href="https://www.thegoodofthehive.com/burts-bees">Burt’s
        Bees Global HQ</a>, <a href="https://www.thegoodofthehive.com/smithsonian-national-zoo-mural">Smithsonian’s National Zoo</a></span>, MIT, Duke
        University, Georgetown University, Auburn University, the
        Planetary Health Alliance annual meeting in Scotland, many
        podcasts including the NEA and educational institutions throughout
        the US.
        <br></br><br></br>
        His work has been featured in the New York Times, Reuters
        London, The Huffington Post, The Washington Post, The Today
        Show, Tedx and countless other publications and media channels.
        <br></br><br></br>
        The Good of the Hive is a partner and collaborator with the  <span style={{color: "orange"}}><a href="https://wcpun.org/">World
        Council of Peoples for the United Nations (WCPUN)</a></span> in support of
        the UN’s 17 Sustainable Development Goals and was featured in the
        special edition of WCPUN’s publication <span style={{color: "orange"}}><a href="https://wcpun.org/centerpoint-now-2/">CENTERPOINT NOW </a></span>
         commemorating the 75th anniversary of the United Nations.
      </AboutText>
      <SocialMediaFooter></SocialMediaFooter>
      </div>
    )
  }