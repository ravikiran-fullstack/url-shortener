import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './navbar.css';

const StyledNav = styled.nav`
  color: #3eadff;
  padding: 10px;
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  background: rgba(76, 175, 80, 0.1);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 10px;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  font-family: 'Madimi One', sans-serif;
  font-weight: 400;
  font-style: normal;

  &:hover {
    color: #868cc4;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
      </ul>
      <ul className="right-StyledLinks">
        <li>
          <StyledLink to="/about">About</StyledLink>
        </li>
        <li>
          <StyledLink to="/features">Features</StyledLink>
        </li>
        <li>
          <StyledLink to="/design-document">Design Document</StyledLink>
        </li>
        <li>
          <StyledLink to="/profile">Profile</StyledLink>
        </li>
        <li>
          <StyledLink to="/login">Login</StyledLink>
        </li>
        <li>
          <StyledLink to="/register">Register</StyledLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
