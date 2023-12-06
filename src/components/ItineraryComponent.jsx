import React from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Spinner,
} from "react-bootstrap";

const ItineraryComponent = ({
  flightData,
  selectedSeats,
  booknow,
  isLaoding,
}) => {
  return (
    <Container>
      <Row>
        <Card>
          <CardBody>
            <Card.Title className="border-bottom">
              Review your itinerary
            </Card.Title>
            <Card.Text>
              <strong>Airline:</strong> {flightData?.flightName}
            </Card.Text>
            <Card.Text>
              <strong>Airline Code:</strong> {flightData?.flightCode}
            </Card.Text>
            <Card.Text>
              <strong>Origin:</strong> {flightData?.origin}
            </Card.Text>
            <Card.Text className="border-bottom pb-2">
              <strong>Destination:</strong> {flightData?.destination}
            </Card.Text>
            <Card.Text>
              <strong>Journey Date:</strong> {flightData?.journeyDate}
            </Card.Text>
            <Card.Text className="border-bottom pb-2">
              <strong>Seats Selected: </strong>
              {selectedSeats.join(", ")}
            </Card.Text>
            <Card.Text>
              <strong>Price:</strong> ₹{" "}
              {flightData?.price * selectedSeats.length}
            </Card.Text>
            {isLaoding && <Spinner animation="grow" />}
            <Button variant="success" onClick={() => booknow}>
              Book Now
            </Button>
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
};

export default ItineraryComponent;
