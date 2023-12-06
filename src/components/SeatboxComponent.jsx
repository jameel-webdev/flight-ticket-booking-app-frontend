import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const SeatboxComponent = ({ flightData, selectedSeats, setSelectedSeats }) => {
  const [color, setColor] = useState("bg-secondary-subtle");
  const capacity = flightData?.capacity;
  const selectOrUnselectSeats = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      // Remove the seat from the selectedSeats array
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      // Add the seat to the selectedSeats array
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
          const seatColor = isSeatSelected ? "bg-success" : "";
          const cursorStyle = isSeatSelected ? "not-allowed" : "pointer";

          return (
            <Col
              xs={3}
              className={`text-center py-2 border rounded ${seatColor}`}
              key={seat}
            >
              <div
                style={{ cursor: cursorStyle }}
                onClick={() => {
                  // Only allow selecting/unselecting if the seat is not already booked
                  if (!isSeatSelected) {
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
