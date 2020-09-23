import React from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import Logo from "../assets/Logo-sm.png";

const Styles = styled.div`
    a, a:hover {
        text-decoration: none;
    }
  .nav-bar {
      padding: 0px 20px;
    background: #0984fd;
    width: 100%;
  }
  .nav-bar img {
      max-height: 50px;
  }
  @media( max-width: 992px ){
    .navbar-collapse, .navbar-nav {
        padding-bottom: 10px;
    }
    .navbar-nav a{
        padding: 10px 30px;
    }
  }
  @media( min-width: 992px ){
    .navbar-collapse, .navbar-nav {
        height: 82px;
    }
  }
  .materate-text h2 {
    color: #ffffff;
    font-weight: 700;
  }

  .links {
      height: 100%;
      transition: 0.4s background, 0s border;
      margin: 0;
      padding: 0px 20px;
      font-family: "Open Sans";
      display: flex;
      align-items: center;
      justify-content: center;
    color: #ffffff;
    border-bottom: 2px solid transparent;
  }
  .links:hover {
      background: rgba(255,255,255,0.4);
      border-bottom: 2px solid white;
      text-decoration: none;
  }
  .login-link:hover {
    background: transparent;
    border-bottom: 2px solid transparent;
  }
  .activelink{
    background: rgba(255,255,255,0.4);
    border-bottom: 2px solid white;
    text-decoration: none;
  }

 
    .login-box {
        background: transparent;
        color: white;
        border: 1px solid white;
        transition: 0.3s;
    }
    .login-box:hover {
        background: white;
        color: #0032ad;
        border: 1px solid transparent;
    }
`;

function NavBar(props){
    return (
      <Styles>
        <Navbar expand="lg" fixed="top" className="nav-bar">
          <Navbar.Brand
            href="#homepage"
            className="d-flex justify-content-center align-items-center py-3"
          >
            <NavLink to="/" className="d-flex justify-content-center align-items-center">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className="materate-text mx-2">
                    <h2 className="m-0"> MateRate</h2>
                </div>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto d-flex align-items-center">
              <NavLink to="/" className={`links ${ props.props.location.pathname == "/" ? "activelink" : "" }`}>
                Home
              </NavLink>
              <NavLink to="/programs" className={`links ${ props.props.location.pathname == "/programs" ? "activelink" : "" }`}>
                Programs
              </NavLink>
              <NavLink to="/aboutus" className={`links ${ props.props.location.pathname == "/aboutus" ? "activelink" : "" }`}>
                About Us
              </NavLink>
              <NavLink to="/contactus" className={`links ${ props.props.location.pathname == "/contactus" ? "activelink" : "" }`}>
                Contact Us
              </NavLink>
              <NavLink to="/login" className="links login-link">
                <div className="btn login-box">Login</div>
              </NavLink>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    )
}
export default NavBar;
