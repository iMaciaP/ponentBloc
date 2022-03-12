import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">PonentBloc</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="ElCogul" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sector</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Sector</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Albages" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sector</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Sector</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cubells" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sector</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Sector</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="secondary">Col·labora</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
