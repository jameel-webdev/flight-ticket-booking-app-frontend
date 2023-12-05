import React from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";

const FlightformComponent = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Flight Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Row>
                <Col xs={4}>
                  <Form.Group>
                    <Form.Label>Airline Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter flight name" />
                  </Form.Group>
                </Col>
                <Col xs={4}>
                  <Form.Group>
                    <Form.Label>Flight Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter flight Code" />
                  </Form.Group>
                </Col>
                <Col xs={4}>
                  <Form.Group>
                    <Form.Label>Journey Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>Origin</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Choose flight type</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>Destination</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Choose flight type</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>Departure Time</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>Arrival Time</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>Capacity</Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Label>Flight Type</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Choose flight type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>Flight Status</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Choose flight status</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FlightformComponent;
