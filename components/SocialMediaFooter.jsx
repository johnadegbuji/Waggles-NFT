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
const SocialImageInverted = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 10px;
    margin-right: 10px;
    filter: invert(1);
`


const SocialMediaFooter = () => {
    return  (
        <>
            <SocialContainer>
                <a href="https://instagram.com/thegoodofthehive"><SocialImage src="/instagram.png"></SocialImage></a>
                <a href="https://twitter.com/goodofthehive"><SocialImage src="/twitter.png"></SocialImage></a>
                <a href="https://www.facebook.com/thegoodofthehive"><SocialImageInverted src="/Facebook-White.png"></SocialImageInverted></a>
            </SocialContainer>
        </>
    )
}

export default SocialMediaFooter;