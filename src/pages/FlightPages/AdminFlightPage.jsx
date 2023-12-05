import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import SearchformComponent from "../../components/SearchformComponent";
import FightcardComponent from "../../components/FightcardComponent";
import FlightformComponent from "../../components/FlightformComponent";

const AdminFlightPage = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <Button variant="primary" onClick={handleShow}>
        Add flight
      </Button>
      <Row>
        <SearchformComponent />
        <FightcardComponent />
      </Row>
      {setShow && <FlightformComponent show={show} setShow={setShow} />}
    </Container>
  );
};

export default AdminFlightPage;
