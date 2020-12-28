import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
const NavTop = () => {
  return (
    <Navbar
      expand="lg"
      className="px-md-4 py-4 "
      style={{ position: "sticky" }}
    >
      <Navbar.Brand href="/" className="font-weight-bold nav-brand">
        <FontAwesomeIcon icon={faTooth} className="mr-2" />
        Dentists Gateway
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto  font-weight-bold">
          <Nav.Link href="/" className="mx-2 nav-link-top">
            Home
          </Nav.Link>
          <Nav.Link href="/home/#about" className="mx-2 nav-link-top">
            About
          </Nav.Link>
          <Nav.Link href="/login" className="mx-2 nav-link-top">
            Doctors Dashboard
          </Nav.Link>
          <Nav.Link href="/home/#blog" className="mx-md-3 mx-2 nav-link-top">
            Blog
          </Nav.Link>
          <Nav.Link href="/appointment" className="mx-2 nav-link-top">
            Appointment
          </Nav.Link>
          <Nav.Link href="/home/#contact" className="mx-2 nav-link-top">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavTop;
