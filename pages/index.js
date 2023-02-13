import {useState} from 'react'
import styled from "styled-components";
import SocialMediaFooter from '../components/SocialMediaFooter';
import Navigation from '../components/Navigation';
import styles from '../styles/Home.module.css'



const NftGallery = styled.div`
    width: 500px;
    height: 425px;
    margin-top: -1.5%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4%;
    display: flex;
    left: 0;
    right: 0;
    bottom: 0%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    
    @media only screen and (min-Width: 1024px){
      width: 575px;
      margin-top: -.5%;
    
    }

    @media only screen and (min-Width: 1439px){
      width: 700px;
      margin-top: -1.5%;

    }

    @media only screen and (min-Width: 768px) and (max-Width: 991px) {
      width: 65%;
      margin-top: -5%;
      bottom: 0%;

    }

    @media only screen and (max-Width: 767px){
      width: 80%;
    }


`

const NftImage = styled.img`
  width: 180px;
  height: auto;
  margin-top: 2.5%;

  @media only screen and (max-Width: 1024px){
  width: 165px;
  height: auto;
  margin-top: 8%;
  }
  
  @media only screen and (min-Width: 768px) and (max-Width: 991px) {
    width: 135px;
    height: 135px;
  }

  @media only screen and (max-Width: 767px){
    width: 100px;
    height: 100px;
  }
`

const Title = styled.h1`
    font-family: 'Poppins';
    font-weight: 600;
    margin-top: 1%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    height: 30px;

    @media only screen and (max-Width: 767px){
      margin-top: 7%;

    
    }
    `
const Subtitle = styled.h1`
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 400;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

`


export default function Home() {

  return (
    
    <div className="pageWrapper">
    <Navigation top="-6%"></Navigation>
    <Title>The Good of The Hive NFT Bees</Title>
    <Subtitle>by Matt Willey</Subtitle>
    <Subtitle>for The Good of the Hive®</Subtitle>
    <NftGallery>
      <NftImage src="/waggle40.png"></NftImage>
      <NftImage src="/waggle54.png"></NftImage>
      <NftImage src="/waggle109.png"></NftImage>
      <NftImage src="/waggle129.png"></NftImage>
      <NftImage src="/waggle254.png"></NftImage>
      <NftImage src="/waggle671.png"></NftImage>        
    </NftGallery>
    <SocialMediaFooter></SocialMediaFooter>
    </div>
    
  )

}
