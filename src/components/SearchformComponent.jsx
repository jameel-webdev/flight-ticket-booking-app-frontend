import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SearchformComponent = ({ setIsButtonClicked }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchResult({
      origin,
      destination,
      journeyDate,
    });
  };
  return (
    <Container>
      <Row>
        <Form
          className="d-flex gap-4 py-3 border-bottom"
          onSubmit={handleSubmit}
        >
          <Col xs={3}>
            <Form.Group>
              <Form.Select
                aria-label="Default select example"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              >
                <option value="">Where from ?</option>
                <option value="Bangalore(BLR)">Bangalore-BLR</option>
                <option value="Chennai(MAA)">Chennai-MAA</option>
                <option value="Pune(PNQ)">Pune-PNQ</option>
                <option value="Goa(GOI)">Goa-GOI</option>
                <option value="Mumbai(BOM)">Mumbai-BOM</option>
                <option value="Delhi(DEL)">Delhi-DEL</option>
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
                <option value="Bangalore(BLR)">Bangalore-BLR</option>
                <option value="Chennai(MAA)">Chennai-MAA</option>
                <option value="Pune(PNQ)">Pune-PNQ</option>
                <option value="Goa(GOI)">Goa-GOI</option>
                <option value="Mumbai(BOM)">Mumbai-BOM</option>
                <option value="Delhi(DEL)">Delhi-DEL</option>
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
