import React from "react";
import { Container, Navbar } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer>
      <Navbar bg="light" variant="light" expand="lg">
        <Container className="justify-content-center align-items-center">
          <Navbar.Brand>Footer</Navbar.Brand>
        </Container>
      </Navbar>
    </footer>
  );
};

export default FooterComponent;
