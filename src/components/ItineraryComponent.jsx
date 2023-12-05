import React from "react";
import { Card, CardBody, Container, Row } from "react-bootstrap";

const ItineraryComponent = () => {
  return (
    <Container>
      <Row>
        <Card>
          <CardBody>
            <Card.Title className="border-bottom py-2">
              Review your itinerary
            </Card.Title>
            <Card.Text>
              <strong>Airline:</strong> SpiceJect
            </Card.Text>
            <Card.Text>
              <strong>Airline Code:</strong> 6E-3456
            </Card.Text>
            <Card.Text>
              <strong>Origin:</strong> Mumbai
            </Card.Text>
            <Card.Text className="border-bottom pb-3">
              <strong>Destination:</strong> Bangalore
            </Card.Text>
            <Card.Text>
              <strong>Journey Date:</strong> 12-12-2023
            </Card.Text>
            <Card.Text className="border-bottom pb-3">
              <strong>Seats Selected:</strong> 12-12-2023
            </Card.Text>
            <Card.Text>
              <strong>Price:</strong> 12-12-2023
            </Card.Text>
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
};

export default ItineraryComponent;
