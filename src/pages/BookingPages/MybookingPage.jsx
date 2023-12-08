import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MybookingsPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const mybookings = userInfo.mybookings;

  return (
    <>
      <Container className="d-flex justify-content-between my-2">
        <h3>My Trips</h3>
        <Link to="/search">
          <Button>Book One More</Button>
        </Link>
      </Container>
      <Table
        striped
        bordered
        hover
        size="sm"
        className="overflow-y-auto"
        style={{ height: "65vh" }}
      >
        <thead>
          <tr>
            <th>Booking Id</th>
            <th>Airline Code</th>
            <th>Airline Name</th>
            <th>Journey Date</th>
            <th>Seat Number</th>
          </tr>
        </thead>
        <tbody>
          {mybookings.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item._id}</td>
                <td>{item.flightCode}</td>
                <td>{item.flightName}</td>
                <td>{item.journeyDate}</td>
                <td>{item.seatsBooked.map((i) => i).join(", ")}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default MybookingsPage;
