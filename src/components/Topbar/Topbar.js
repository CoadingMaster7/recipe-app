import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

const Topbar = () => (
  <header>
    <Navbar className="shadow" color="white" light>
      <Container>
        <NavbarBrand>Recipe App</NavbarBrand>
      </Container>
    </Navbar>
  </header>
);

export default Topbar;
