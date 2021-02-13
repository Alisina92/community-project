import React from "react";


const Footer = (props) => {
  const Footer = props.styled.nav`
    background: black;
    padding: 0.1rem;
    width: 100%;
  `;
  const Ul = props.styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `;

 
  const SocialMedia = props.styled.a`
     color: white;
      text-decoration:none;
  `;
  return (
    <Footer>
      <Ul>
        <SocialMedia
          href="https://www.linkedin.com"
          rel="noreferrer"
          target="_blank"
        >
         Copyright@ourname.com
        </SocialMedia>
        <SocialMedia
          href="https://www.linkedin.com"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </SocialMedia>
        <SocialMedia
          href="https://www.instagram.com"
          rel="noreferrer"
          target="_blank"
        >
          Instagram
        </SocialMedia>
        <SocialMedia
          href="https://www.Twitter.com"
          rel="noreferrer"
          target="_blank"
        >
          Twitter
        </SocialMedia>
        <SocialMedia
          href="https://www.facebook.com"
          rel="noreferrer"
          target="_blank"
        >
          facebook
        </SocialMedia>
      </Ul>
    </Footer>
  );
};
export default Footer;
