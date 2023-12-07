import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const SearchformComponent = ({ setFlightsData }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const { flightInfo } = useSelector((state) => state.flights);
  const allData = flightInfo.data;
  const [searchResult, setSearchResult] = useState({});
  const filteredFlights = allData.filter((flight) => {
    return Object.entries(searchResult).every(([key, value]) => {
      return value === "" || flight[key] === value;
    });
  });
  console.log(filteredFlights);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchResult({
      origin,
      destination,
      journeyDate,
    });
    setFlightsData(filteredFlights);
  };
  return (
    <Container>
      <Row>
        <Form
          className="d-flex gap-4 py-3 border-bottom"
          onSubmit={handleSearch}
        >
          <Col xs={3}>
            <Form.Group>
              <Form.Select
                aria-label="Default select example"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              >
                <option value="">Where from ?</option>
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
          <Col xs={3}>
            <Form.Group>
              <Form.Select
                aria-label="Default select example"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <option value="">Where to ?</option>
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
          <Col xs={3}>
            <Form.Group>
              <Form.Control
                type="date"
                value={journeyDate}
                onChange={(e) => setJourneyDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group>
              <Button
                as="input"
                type="submit"
                value="Search flights"
                onClick={() => setIsButtonClicked(true)}
              />
            </Form.Group>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default SearchformComponent;
