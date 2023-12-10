import React from "react";
import { Button, Card, CardBody, Container, Row } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PaymentsuccessPage = () => {
  const { flightInfo } = useSelector((state) => state.flight);
  const flightDetails = flightInfo.flight;
  const searchQuery = useSearchParams()[0];
  const transaction_id = searchQuery.get("reference");
  const seatsBooked = searchQuery.get("seatsBooked");
  const seatsArray = seatsBooked.split(",").map(Number);
  return (
    <Container>
      <Row>
        <Card>
          <CardBody>
            <Card.Title className="border-bottom">
              <div className="d-flex justify-content-between my-2">
                <h3>Payment Successful</h3>
                <Link to="/mybookings">
                  <Button>Go to my trips</Button>
                </Link>
              </div>
              <i className="text-secondary">TransactionId :</i> {transaction_id}
            </Card.Title>
            <Card.Text>
              <strong>Airline:</strong> {flightDetails?.flightName}
            </Card.Text>
            <Card.Text>
              <strong>Airline Code:</strong> {flightDetails?.flightCode}
            </Card.Text>
            <Card.Text>
              <strong>Origin:</strong> {flightDetails?.origin}
            </Card.Text>
            <Card.Text className="border-bottom pb-1">
              <strong>Destination:</strong> {flightDetails?.destination}
            </Card.Text>
            <Card.Text>
              <strong>Journey Date:</strong> {flightDetails?.journeyDate}
            </Card.Text>
            <Card.Text className="border-bottom pb-1">
              <strong>Seats Selected: </strong> {seatsBooked}
            </Card.Text>
            <Card.Text>
              <strong>Amount Paid:</strong>{" "}
              {flightDetails.price * seatsArray.length}
            </Card.Text>
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
};

export default PaymentsuccessPage;
