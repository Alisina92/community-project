import React from "react";
import { Link } from "react-router-dom";


const Navbar = (props) => {
  const Navbar = props.styled.nav`
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
  return (
    <Navbar>
      <Ul>
        <Link to="/">
          <List>Home</List>
        </Link>
        <Link to="/learning">
          <List>Learning Material</List>
        </Link>
        <Link to="/slack">
          <List>Slack Community</List>
        </Link>
        <Link to="/projects">
          <List>Projects</List>
        </Link>
        <Link to="/contact">
          <List>Contact</List>
        </Link>
        <Link to="/Login" >
          <List>Login</List>
        </Link>
      </Ul>
    </Navbar>
  );
};
export default Navbar;
