import React from "react";
import { Badge, Button, Card, CardBody, Form } from "react-bootstrap";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";

const SearchBox = () => {
  return (
    <div className="mt-3">
      <div className="fs-4 fw-medium">Search flights</div>
      <div className="fs-6 mb-2">Enjoy hassle free bookings with Flypulse</div>
      <Card>
        <CardBody className="d-flex flex-column gap-3 my-2 py-4">
          <span>
            <Badge
              pill
              bg="light"
              text="dark"
              className="p-2 fs-6 text-secondary"
            >
              Regular fare
            </Badge>
          </span>
          <span>
            <Badge
              pill
              bg="light"
              text="dark"
              className="p-2 fs-6 text-secondary"
            >
              Oneway ticket
            </Badge>
          </span>
          <Form className="d-flex flex-column gap-4">
            <Form.Group className="d-flex flex-row gap-2 border border-1 rounded">
              <MdFlightTakeoff size={60} />
              <Form.Select
                aria-label="Default select example"
                className="border border-0"
              >
                <option value="">Where from ?</option>
                <option value="Bangalore(BLR)">Bangalore-BLR</option>
                <option value="Chennai(MAA)">Chennai-MAA</option>
                <option value="Pune(PNQ)">Pune-PNQ</option>
                <option value="Goa(GOI)">Goa-GOI</option>
                <option value="Mumbai(BOM)">Mumbai-BOM</option>
                <option value="Delhi(DEL)">Delhi-DEL</option>
              </Form.Select>
              <MdFlightLand size={60} />
              <Form.Select
                aria-label="Default select example"
                className="border border-0"
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
            <Form.Group className="d-flex flex-row gap-2">
              <Form.Control className="p-2" type="date" />
              <Button
                className="p-3 bg-success"
                as="input"
                type="submit"
                value="Search flights"
              />
            </Form.Group>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default SearchBox;
