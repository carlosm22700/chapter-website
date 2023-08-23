import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBarStyles.css";
import crest from "../assets/images/crest.png";
import navIcon from "../assets/images/nav-icon3.svg";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/">
          <img src={crest} alt="Crest" className="navbar-crest" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-lg-center">
            <Nav.Link
              href="https://www.instagram.com/lul_bruins/"
              target="_blank"
            >
              <img src={navIcon} alt="" />
            </Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/hermanos">Hermanos</Nav.Link>
            <Nav.Link href="#home">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Use Link from react-router-dom instead of Nav.Link?
