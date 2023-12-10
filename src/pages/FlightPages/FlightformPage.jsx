import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddflightMutation } from "../../slices/Flights/flightApiSlice";

const FlightformPage = () => {
  const [flightName, setFlightName] = useState("");
  const [flightCode, setFlightCode] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [flightType, setFlightType] = useState("");
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const [addFlight, { isLoading }] = useAddflightMutation();
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await addFlight({
        flightName,
        flightCode,
        origin,
        destination,
        journeyDate,
        departureTime,
        arrivalTime,
        capacity,
        flightType,
        price,
        status,
      }).unwrap();
      navigate("/allflights");
      toast.success(res.message);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  return (
    <Container className="card px-3 py-4">
      <Form onSubmit={handleForm}>
        <Row>
          <Col xs={6} md={4}>
            <Form.Group>
              <Form.Label>
                <strong>Airline Name</strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter flight name"
                value={flightName}
                onChange={(e) => setFlightName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={6} md={4}>
            <Form.Group>
              <Form.Label>
                <strong>Flight Code</strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter flight Code"
                value={flightCode}
                onChange={(e) => setFlightCode(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={6} md={4}>
            <Form.Group>
              <Form.Label>
                <strong>Journey Date</strong>
              </Form.Label>
              <Form.Control
                type="date"
                value={journeyDate}
                onChange={(e) => setJourneyDate(e.target.value)}
                min={getCurrentDate()}
              />
            </Form.Group>
          </Col>
          <Col xs={6} md={4}>
            <Form.Group>
              <Form.Label>
                <strong>Origin</strong>
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              >
                <option>Where From ?</option>
                <option value="Ahmedabad-AMD">Ahmedabad-AMD</option>
                <option value="Bangalore-BLR">Bangalore-BLR</option>
                <option value="Chennai-MAA">Chennai-MAA</option>
                <option value="Delhi-DEL">Delhi-DEL</option>
                <option value="Goa-GOI">Goa-GOI</option>
                <option value="Hyderabad-HYD">Hyderabad-HYD</option>
                <option value="Kochi-COK">Kochi-COK</option>
                <option value="Kolkata-CCU">Kolkata-CCU</option>
                <option value="Mumbai-BOM">Mumbai-BOM</option>
                <option value="Pune-PNQ">Pune-PNQ</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={6} md={4}>
            <Form.Group>
              <Form.Label>
                <strong>Destination</strong>
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <option>Where To ?</option>
                <option value="Ahmedabad-AMD">Ahmedabad-AMD</option>
                <option value="Bangalore-BLR">Bangalore-BLR</option>
                <option value="Chennai-MAA">Chennai-MAA</option>
                <option value="Delhi-DEL">Delhi-DEL</option>
                <option value="Goa-GOI">Goa-GOI</option>
                <option value="Hyderabad-HYD">Hyderabad-HYD</option>
                <option value="Kochi-COK">Kochi-COK</option>
                <option value="Kolkata-CCU">Kolkata-CCU</option>
                <option value="Mumbai-BOM">Mumbai-BOM</option>
                <option value="Pune-PNQ">Pune-PNQ</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={6} md={4}>
            <Form.Label>
              <strong>Flight Type</strong>
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={flightType}
              onChange={(e) => setFlightType(e.target.value)}
            >
              <option>Choose flight type</option>
              <option value="Economy">Economy</option>
              <option value="First Class">First Class</option>
              <option value="Business Class">Business Class</option>
            </Form.Select>
          </Col>
          <Col xs={6} md={4}>
            <Form.Group>
              <Form.Label>
                <strong>Departure Time</strong>
              </Form.Label>
              <Form.Control
                type="time"
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={6} md={4}>
            <Form.Group>
              <Form.Label>
                <strong>Arrival Time</strong>
              </Form.Label>
              <Form.Control
                type="time"
                value={arrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={6} md={4}>
            <Form.Group>
              <Form.Label>
                <strong>Flight Status</strong>
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Choose flight status</option>
                <option value="Schedule">Schedule</option>
                <option value="Arrived">Arrived</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={6} md={4}>
            <Form.Group>
              <Form.Label>
                <strong>Capacity</strong>
              </Form.Label>
              <Form.Control
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={6} md={4}>
            <Form.Group>
              <Form.Label>
                <strong>Fare</strong>
              </Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col className="d-flex flex-row-reverse m-2">
            <Button variant="success" type="submit">
              Add flight
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default FlightformPage;
