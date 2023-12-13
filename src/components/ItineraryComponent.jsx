import React from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Spinner,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRazorOrderMutation } from "../slices/Bookings/bookingApiSlice";
import { useGetRazorKeyQuery } from "../slices/Bookings/bookingApiSlice";

const ItineraryComponent = ({ flightData, selectedSeats }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const disabled = selectedSeats.length === 0 ? "disabled" : "";
  const flightId = flightData?._id;
  const [razorOrder, { isLoading }] = useRazorOrderMutation();
  const { data } = useGetRazorKeyQuery();
  const createOrder = async () => {
    try {
      const res = await razorOrder({
        amount: flightData.price * selectedSeats.length * 100,
        receipt: flightId,
      });

      const options = {
        key: data.key,
        amount: res.data.order.amount,
        currency: "INR",
        name: "FlyPulse",
        description: "Test Transaction",
        image: "/flypulse-logo.png",
        order_id: res.data.order.id,
        callback_url: `https://flight-ticket-booking-webapp.onrender.com/api/razorpay/validate?userId=${userInfo.data._id}&flightId=${flightData._id}&seatsBooked=${selectedSeats}`,
        prefill: {
          name: userInfo.name,
          email: userInfo.email,
          contact: "9876543210",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
      toast(res.message);
    } catch (error) {
      alert(error.error);
    }
  };

  useEffect(() => {
    if (isButtonClicked) {
      alert(
        `USE THIS UPI_IDs\nFor Success Status : success@razorpay \n  For Failure Status : failure@razorpay`
      );
      createOrder();
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
