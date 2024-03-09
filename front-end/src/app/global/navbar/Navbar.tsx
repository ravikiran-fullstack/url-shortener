import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './navbar.css';

const StyledNav = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  &:hover {
    color: #ff0;
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
          <StyledLink to="/contact">Contact</StyledLink>
        </li>
        <li>
          <StyledLink to="/profile">Profile</StyledLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
