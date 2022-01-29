import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
} from "react-bootstrap";
//import images
import LogoImg from "../../assets/images/logo/Logo-confyde.png";
class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          fixed="top"
          bg="light"
          variant="light"
        >
          <Link to="/home">
            <Navbar.Brand to="/home">
              <img src={LogoImg} alt="confyde" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Link to="/login">
                <Nav.Link href="#deets">Login</Nav.Link>
              </Link>
              <Nav.Link>
                <Link
                  to="/getting-started"
                  className="btn btn-primary mt-2 mr-2"
                  style={{ borderRadius: "20px" }}
                >
                  Geting Started
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
