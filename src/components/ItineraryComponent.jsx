import React from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Spinner,
} from "react-bootstrap";
import { useBookMutation } from "../slices/Bookings/bookingApiSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../slices/Users/userSlice";

const ItineraryComponent = ({ flightData, selectedSeats }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const disabled = selectedSeats.length === 0 ? "disabled" : "";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const flightId = flightData?._id;
  const [booknow, { isLoading }] = useBookMutation();
  const bookTicket = async () => {
    try {
      const res = await booknow({
        flightId,
        seatsBooked: selectedSeats,
      }).unwrap();
      dispatch(setCredentials({ ...res.userData }));
      toast.success(res.message);
      navigate("/mybookings");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (isButtonClicked) {
      bookTicket();
    }
  }, [isButtonClicked]);
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
            {isLoading && <Spinner animation="grow" />}
            <Button
              variant="success"
              onClick={() => setIsButtonClicked(true)}
              disabled={disabled}
            >
              Book Now
            </Button>
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
};

export default ItineraryComponent;
