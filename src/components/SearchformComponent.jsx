import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SearchformComponent = () => {
  return (
    <Container>
      <Row>
        <Form className="d-flex gap-4 py-3 border-bottom">
          <Col xs={3}>
            <Form.Group>
              <Form.Select aria-label="Default select example">
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
              <Form.Select aria-label="Default select example">
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
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group>
              <Button as="input" type="submit" value="Search flights" />
            </Form.Group>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default SearchformComponent;
