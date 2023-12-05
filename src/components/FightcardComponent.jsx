import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FightcardComponent = () => {
  return (
    <Container className="my-3">
      <Row>
        <Card>
          <Card.Body>
            <Row className="mt-2">
              <Col>
                <Card.Subtitle className="mb-2 text-muted">
                  Airline
                </Card.Subtitle>
                <Card.Text>SpiceJet</Card.Text>
              </Col>
              <Col>
                <Card.Subtitle className="mb-2 text-muted">From</Card.Subtitle>
                <Card.Text>Bangalore</Card.Text>
              </Col>
              <Col>
                <Card.Subtitle className="mb-2 text-muted">To</Card.Subtitle>
                <Card.Text>Goa</Card.Text>
              </Col>
              <Col>
                <Card.Subtitle className="mb-2 text-muted">Fare</Card.Subtitle>
                <Card.Text>5000</Card.Text>
              </Col>
              <Col>
                <Card.Subtitle className="mb-2 text-muted">
                  Journey Date
                </Card.Subtitle>
                <Card.Text>08-12-2023</Card.Text>
              </Col>
              <Col>
                <Link to="/booking">
                  <Button type="submit">Book Now</Button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default FightcardComponent;
