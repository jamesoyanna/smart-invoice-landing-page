 import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
} from "react-bootstrap";
//import images
import LogoImg from "../../assets/images/logo/smart-lgo.png";

 const NavBar = () => {
   return (
     <>
        <Navbar
          collapseOnSelect
          expand="lg"
          fixed="top"
          bg="light"
          variant="light"
        >
          <Link to="/">
            <Navbar.Brand to="/home">
              <img src={LogoImg} alt="smart invoice" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
                 <a style={{ borderRadius: "20px" }} className="btn btn-primary mt-2 mr-2" href="https://smart-invoice.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                    Geting Started
                 </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
   );
 }
 export default NavBar;
 



