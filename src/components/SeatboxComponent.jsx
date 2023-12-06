import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const SeatboxComponent = ({ flightData, selectedSeats, setSelectedSeats }) => {
  const capacity = flightData?.capacity;
  const selectOrUnselectSeats = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };
  return (
    <Container>
      <Row
        className="d-flex flex-row gap-1 overflow-y-scroll"
        style={{ height: "70vh" }}
      >
        {Array.from(Array(capacity).keys()).map((seat) => {
          const isSeatSelected = selectedSeats.includes(seat + 1);
          const isSeatBooked = flightData?.seatsBooked.includes(seat + 1);
          const seatColor = isSeatSelected
            ? "bg-success"
            : isSeatBooked
            ? "bg-danger"
            : "";

          return (
            <Col
              xs={3}
              className={`text-center py-2 border rounded ${seatColor}`}
              key={seat}
            >
              <div
                style={{ cursor: isSeatBooked ? "not-allowed" : "pointer" }}
                onClick={() => {
                  if (!isSeatBooked) {
                    selectOrUnselectSeats(seat + 1);
                  }
                }}
              >
                {seat + 1}
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default SeatboxComponent;
