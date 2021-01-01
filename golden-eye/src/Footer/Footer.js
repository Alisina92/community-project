import React from "react";
import { Link } from "react-router-dom";

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

  const List = props.styled.li`
    color: white;
  `;
  const SocialMedia = props.styled.a`
     color: white;
      text-decoration:none;
  `;
  return (
    <Footer>
      <Ul>
        <Link to="/email">
          <List>Copyright@ourname.com</List>
        </Link>
        <SocialMedia href="https://www.linkedin.com" rel="noreferrer" target="_blank">
          LinkedIn
        </SocialMedia>
        <SocialMedia href="https://www.instagram.com" rel="noreferrer" target="_blank">
          Instagram
        </SocialMedia>
        <SocialMedia href="https://www.Twitter.com" rel="noreferrer" target="_blank">
          Twitter
        </SocialMedia>
        <SocialMedia href="https://www.facebook.com" rel="noreferrer" target="_blank">
          facebook
        </SocialMedia>
      </Ul>
    </Footer>
  );
};
export default Footer;
