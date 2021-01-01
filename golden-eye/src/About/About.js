import React from "react";
import styled from "styled-components";
import Coder from '../images/coder.jpg'
const About = () => {
   const Image = styled.img`
      width: 300px;
`
    const AboutBox = styled.div`
      margin-top: 30px;
    `
    const AboutParagraph= styled.p`
       margin: 50px;
    `
    const AboutTitle = styled.h3`
      text-align: left;
      margin-left: 70px;
    `;
return (
    <AboutBox className='row col-12'>
      <div className='col-3'>
      <Image src={Coder} alt='Programmer'/>
     </div>
      <div className='col-8'>
      <AboutTitle>About Us</AboutTitle>
      <AboutParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </AboutParagraph>

      </div>
       
    </AboutBox>
  );
};

export default About;
