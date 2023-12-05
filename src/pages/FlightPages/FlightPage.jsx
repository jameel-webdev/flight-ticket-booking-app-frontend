import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchformComponent from "../../components/SearchformComponent";
import FightcardComponent from "../../components/FightcardComponent";

const FlightPage = () => {
  return (
    <Container>
      <Row>
        <SearchformComponent />
        <FightcardComponent />
      </Row>
    </Container>
  );
};

export default FlightPage;
