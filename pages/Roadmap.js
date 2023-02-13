import styled from "styled-components";
import Header from '../components/Header.jsx';
import Link from 'next/link'
import SocialMediaFooter from '../components/SocialMediaFooter';
import Navigation from "../components/Navigation.jsx";

const RoadmapTitle = styled.h1`
font-family: 'Poppins';
font-size: 18px;
width: 50%;
height: auto;
text-align: center;

`

const RoadmapDescription = styled.p`
    width: 50%;
    height: auto;
    font-family: 'Poppins';
    font-size: 12px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12%;
    line-height: 1.6;

    @media only screen and (min-Width: 1440px){
      width: 50%;
      height: auto;
      font-family: 'Poppins';
      font-size: 12px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 6%;
    }
    @media only screen and (max-Width: 767px){
      width: 95%;
    }

`
export default function Roadmap() {
    return (
      <>
        <Navigation></Navigation>
        <RoadmapDescription>
        <h1 style={{fontFamily: "Poppins", textAlign:"center"}}>This is about more than just the bees.</h1>
        Within this collection of NFT Bees there are 5 with visual messages that incorporate aspects of planetary
        health beyond pollination. 
        <ul>
          <li>
          A shark’s fin symbolizes the importance of oceans and apex predators.
          </li>
          <li>
          Oil symbolizes the need to change our relationship to fossil fuels and petrochemicals.
          </li>
          <li>
          A tree reminds thatdeforestation is quickly closing a door on biodiversity.
          </li>
          <li>
          Honey drips remind us of the importance of food systems.
          </li>
          <li>
          A simple Echinacea flower reminds us that the issues are not ‘over there’ in nature, they are all around us.
          </li>
        </ul>
          These are not just symbols within this collection, they are a part of the Roadmap to where
          The Good of the Hive is going with the art and the project. If you mint one of these 5 bees, you have just
          won an original bee painting valued at <b>$1000 USD!</b>
          <br></br><br></br>
          Art is our most powerful tool for opening people up to change. The Good of the Hive begins with the
          bees and will continue to support awareness and action in healing the issues that pollinators face. But
          the road ahead is also about what the bees are showing us. The murals, the art, the films and these NFT
          Bees carry a very simple and important message - bees, trees, people, soil, water, and air are all one
          thing. When we wrap our head around this and align with actions that honor this connectedness,
          healing becomes inevitable.
          <br></br><br></br>
          - Matt Willey
        </RoadmapDescription>
        <SocialMediaFooter></SocialMediaFooter>
      </>
    )
  }