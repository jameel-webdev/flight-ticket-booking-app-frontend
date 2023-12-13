import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FightcardComponent = ({ flightsData }) => {
  return (
    <Container className="my-3 overflow-y-scroll" style={{ height: "50vh" }}>
      <Row>
        {flightsData.map((item, index) => {
          return (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Row className="mt-2">
                  <Col xs={5} md={2} className="mb-2">
                    <Card.Subtitle className="mb-2 text-muted">
                      Airline
                    </Card.Subtitle>
                    <Card.Text>{item.flightName}</Card.Text>
                  </Col>
                  <Col xs={7} md={2}>
                    <Card.Subtitle className="mb-2 text-muted">
                      From
                    </Card.Subtitle>
                    <Card.Text>{item.origin}</Card.Text>
                  </Col>
                  <Col xs={7} md={2} className="mb-2">
                    <Card.Subtitle className="mb-2 text-muted">
                      To
                    </Card.Subtitle>
                    <Card.Text>{item.destination}</Card.Text>
                  </Col>
                  <Col xs={5} md={2}>
                    <Card.Subtitle className="mb-2 text-muted">
                      Fare
                    </Card.Subtitle>
                    <Card.Text>₹ {item.price}</Card.Text>
                  </Col>
                  <Col xs={6} md={2}>
                    <Card.Subtitle className="mb-2 text-muted">
                      Journey Date
                    </Card.Subtitle>
                    <Card.Text>{item.journeyDate}</Card.Text>
                  </Col>
                  <Col xs={6} md={2}>
                    <Link to={`/booknow/${item._id}`}>
                      <Button type="submit">Book Now</Button>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default FightcardComponent;
