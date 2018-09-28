import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar } from 'reactstrap';

const Topbar = () => (
  <header>
    <Navbar className="shadow" color="white" light>
      <Container>
        <Link className="navbar-brand" to='/'>
          Recipe App
        </Link>
      </Container>
    </Navbar>
  </header>
);

export default Topbar;
