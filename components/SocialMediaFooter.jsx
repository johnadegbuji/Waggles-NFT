import styled from "styled-components";



const SocialContainer = styled.div`
    width: 35%;
    height: 50px;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    align-content: center;
    left: 0;
    right: 0;
    bottom: 1%;

`
const SocialImage = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 10px;
    margin-right: 10px;

`


const SocialMediaFooter = () => {
    return  (
        <>
            <SocialContainer>
                <SocialImage src="/instagram.png"></SocialImage>
                <SocialImage src="/twitter.png"></SocialImage>
                <SocialImage src="/discord.png"></SocialImage>
            </SocialContainer>
        </>
    )
}

export default SocialMediaFooter;