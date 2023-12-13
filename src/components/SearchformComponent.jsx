import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SearchformComponent = ({ setSelectedSearch }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    setSelectedSearch({
      origin,
      destination,
      journeyDate,
    });
  };
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  return (
    <Container>
      <Row className="card py-3">
        <Form className="d-flex flex-wrap justify-content-between">
          <Col sm={12} md={3}>
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
          <Col sm={12} md={3}>
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
          <Col sm={12} md={3}>
            <Form.Group>
              <Form.Control
                type="date"
                value={journeyDate}
                onChange={(e) => setJourneyDate(e.target.value)}
                min={getCurrentDate()}
              />
            </Form.Group>
          </Col>
          <Col sm={12} md={1}>
            <Form.Group>
              <Button
                as="input"
                type="submit"
                value="Search"
                onClick={handleSearch}
              />
            </Form.Group>
          </Col>
          <Col sm={12} md={1}>
            <Form.Group>
              <Button
                as="input"
                type="submit"
                variant="warning"
                value="Clear"
                onClick={() =>
                  setSelectedSearch({
                    origin: "",
                    destination: "",
                    journeyDate: "",
                  })
                }
              />
            </Form.Group>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default SearchformComponent;
