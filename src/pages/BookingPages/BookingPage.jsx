import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import ItineraryComponent from "../../components/ItineraryComponent";
import SeatboxComponent from "../../components/SeatboxComponent";
import { useGetflightByIdQuery } from "../../slices/Flights/flightApiSlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFlightData } from "../../slices/Flights/flightSlice";

const BookingPage = () => {
  const dispatch = useDispatch();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const flightParams = useParams();
  const [flightIdData, setFlightIdData] = useState([]);
  const { data: flightData, isLoading } = useGetflightByIdQuery(
    flightParams._id
  );
  useEffect(() => {
    if (!isLoading && flightData) {
      setFlightIdData(flightData);
      dispatch(setFlightData({ ...flightData }));
    }
  }, [flightData, isLoading]);
  return (
    <div>
      <Container>
        {flightData && flightIdData ? (
          <Row>
            <Col xs={12} sm={12} md={8}>
              <ItineraryComponent
                flightData={flightIdData.flight}
                selectedSeats={selectedSeats}
              />
            </Col>
            <Col xs={12} md={4}>
              <SeatboxComponent
                flightData={flightIdData.flight}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
              />
            </Col>
          </Row>
        ) : (
          <Spinner animation="grow" />
        )}
      </Container>
    </div>
  );
};

export default BookingPage;
