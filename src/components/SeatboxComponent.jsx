import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const SeatboxComponent = () => {
  const seatsArray = [44];
  return (
    <Container>
      <Row className="d-flex flex-row gap-1 overflow-y-auto">
        <Col xs={3} className="text-center py-1 border rounded">
          1
        </Col>
      </Row>
    </Container>
  );
};

export default SeatboxComponent;
