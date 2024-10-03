import React from "react";
import { Link } from 'react-router-dom';
import '../Components/Navv.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaGlobe, FaUserCog, FaPhone } from 'react-icons/fa';



const Navv=()=>{
  return(
<Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#" id="nav-brand">उत्तराखंड सरकार | Gov.t of Uttarakhand</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="nav-toggle" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            
            className=" justify-content-end flex-grow-1"
            
            navbarScroll
          >
            <Nav.Link as={Link} to="/"><FaHome /> Home</Nav.Link>
            <Nav.Link as={Link} to="/official-website"><FaGlobe /> Official Website</Nav.Link>
            <Nav.Link as={Link} to="/admin-login"><FaUserCog /> Admin Login
            
            </Nav.Link>
            <Nav.Link as={Link} to="/contact"><FaPhone /> Contact Us</Nav.Link>

          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
};
// 
export default Navv;
