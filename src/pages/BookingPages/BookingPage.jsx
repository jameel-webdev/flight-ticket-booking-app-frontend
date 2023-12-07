import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import ItineraryComponent from "../../components/ItineraryComponent";
import SeatboxComponent from "../../components/SeatboxComponent";
import { useGetflightMutation } from "../../slices/Flights/flightApiSlice";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const BookingPage = () => {
  const flightId = useParams()._id;
  const [flightIdData, setFlightIdData] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [getFlightIdData, { isLoading }] = useGetflightMutation();
  const getFlightData = async () => {
    try {
      const res = await getFlightIdData(flightId).unwrap();
      setFlightIdData({ ...res });
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  useEffect(() => {
    getFlightData();
  }, []);
  return (
    <div>
      <Container>
        {isLoading ? (
          <Spinner animation="grow" />
        ) : (
          <Row>
            <Col xs={8}>
              <ItineraryComponent
                flightData={flightIdData.flight}
                selectedSeats={selectedSeats}
              />
            </Col>
            <Col xs={4}>
              <SeatboxComponent
                flightData={flightIdData.flight}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
              />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default BookingPage;
