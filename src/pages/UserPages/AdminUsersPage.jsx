import React from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminUsersPage = () => {
  return (
    <Container>
      <h3>All User Details</h3>
      <Table striped bordered hover size="sm" className="overflow-y-auto">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
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

export default AdminUsersPage;
