import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminBookingsPage = () => {
  return (
    <Container>
      <h3>All Bookings Detail</h3>
      <Table striped bordered hover size="sm" className="overflow-y-auto">
        <thead>
          <tr>
            <th>Booking Id</th>
            <th>Airline Code</th>
            <th>User Email Address</th>
            <th>Journey Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td className="">
              <Link className="text-decoration-none text-primary m-2">
                View
              </Link>
              <Link className="text-decoration-none text-success m-2">
                Edit
              </Link>
              <Link className="text-decoration-none text-danger m-2">
                Delete
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminBookingsPage;
