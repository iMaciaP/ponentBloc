import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { navBarLinks, SectorsVies } from "../../data/data"

const NavBar = () => {
  //fixed="top" option makes navbar absolute
  return (

    <Navbar bg="primary" variant="dark" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="/">PonentBloc</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >

            {navBarLinks.map((element, index) => {
              return (
                <NavDropdown title={element.title} id="navbarScrollingDropdown" key={index} disabled={index == 1 ? false : true}>
                  {element.sectors.map((element2, index2) => {
                    return (
                        <NavDropdown.Item key={index2} href={element2.link}>{element2.name}</NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
              );
            })}
            {/* {Object.keys(SectorsVies).map((element, index) => {
              return (
                <NavDropdown title={element} id="navbarScrollingDropdown" key={index}>
                  {Object.keys(element).map((element2, index2) => {
                    return (
                        <NavDropdown.Item key={index2} href={"/"}>{element2}</NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
              );
            })} */}
          </Nav>
          <Button variant="outline-light" href="/about">Col·labora</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
