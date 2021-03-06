import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Navbar = styled.nav`
  height:60px;
  background:transparent;
  padding:0rem calc((100vw-1300px)/2);
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
const Logo = styled(Link)`
  color:#fff;
  text-decoration:none;
  padding-left:1rem;
  font-size:1.5rem;
  font-weight:bold;
  font-style:italic;
`;

const NavItems = styled.div``;

const NavbarLink = styled(Link)`
  color:#fff;
  text-decoration:none;
  padding:1rem;
`;

const Header = () => {
  return (
    <Navbar>
      <Logo to="/">Animal</Logo>
      <NavItems>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/services">Services</NavbarLink>
      </NavItems>
    </Navbar>
  )
};

export default Header;
