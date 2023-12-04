import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const PopularsectionComponent = () => {
  const searchData = [
    {
      from: "Bangalore",
      to: "Goa",
      airline: "AirAsia",
    },
    {
      from: "Chennai",
      to: "Mumbai",
      airline: "IndiGo",
    },
    {
      from: "New Delhi",
      to: "Hyderabad",
      airline: "Vistara",
    },
    {
      from: "Goa",
      to: "Chennai",
      airline: "SpiceJet",
    },
    {
      from: "Cochin",
      to: "Kolkata",
      airline: "Jet Airways",
    },
  ];
  return (
    <>
      <div className="fs-5 fw-medium mt-2">Popular Search</div>
      <Container>
        <Row className="d-flex flex-column">
          {searchData.map((item, index) => {
            return (
              <Col
                className="d-flex border border-1 rounded p-3 m-1 justify-content-between"
                key={index}
              >
                <span>{item.airline}</span>
                <span>{item.from}</span>
                <span>
                  <BsArrowRight />
                </span>
                <span>{item.to}</span>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default PopularsectionComponent;
