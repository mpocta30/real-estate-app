import React, { useState } from "react";
import "./Hero.css";
import Login from "../../pages/Login/Login";
import {
  Container,
  Jumbotron,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";

const Hero = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);

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
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      <Jumbotron className="bgimage" fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
      <Login onClose={handleClose} show={show} />
    </>
    // <Navbar bg="light" expand="lg">
    //   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#home">Home</Nav.Link>
    //       <Nav.Link href="#link">Link</Nav.Link>
    //       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">
    //           Another action
    //         </NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">
    //           Separated link
    //         </NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //     <Form inline>
    //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //       <Button variant="outline-success">Search</Button>
    //     </Form>
    //   </Navbar.Collapse>
    // </Navbar>
  );
};

export default Hero;
