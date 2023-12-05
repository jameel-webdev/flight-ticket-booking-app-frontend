import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ItineraryComponent from "../../components/ItineraryComponent";
import SeatboxComponent from "../../components/SeatboxComponent";

const BookingPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={8}>
            <ItineraryComponent />
          </Col>
          <Col xs={4}>
            <SeatboxComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookingPage;
