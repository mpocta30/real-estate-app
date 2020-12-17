import React, { useState } from "react";
import "./Hero.css";
import Login from "../../pages/Login/Login";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import {
  Container,
  Jumbotron,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";

const Hero = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const { logout, currentUser } = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);

  let handleLogout = async () => {
    setError("");

    try {
      await logout();
      window.location.reload(false);
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <>
      <Navbar fixed="top" expand="md" variant="dark" className="shadow-none">
        <Navbar.Brand href="#home">
          <img
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">For You</Nav.Link>
          <Nav.Link href="#features">List</Nav.Link>
          <Nav.Link href="#pricing">Map</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={handleShow}>Login</NavDropdown.Item>
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      <Jumbotron className="bgimage" fluid>
        <Container>
          <p style={{ color: "white" }}>
            {!currentUser ? "" : currentUser.email}
          </p>
        </Container>
      </Jumbotron>
      <Login onClose={handleClose} show={show} />
    </>
  );
};

export default Hero;
