import React from "react";
import Welcome from "../images/Welcome.jpg";

const Hero = (props) => {
  const ImageContainer = props.styled.div`
         width:100%;
         margin:0px;
     `;
  const HeroImg = props.styled.img`
       width:100%;
       margin-bottom:-3px;
       
     `;
  const Button = props.styled.button`
       background: orange;
        position:  absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);

`
  return (
    <ImageContainer>
      <HeroImg src={Welcome} alt="Welcome-photo" />
       <Button>Welcome</Button>
    </ImageContainer>
  );
};

export default Hero;
