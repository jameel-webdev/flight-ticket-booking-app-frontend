import React, { useEffect, useState } from "react";
import { Button, Container, Row, Spinner, Table } from "react-bootstrap";
import SearchformComponent from "../../components/SearchformComponent";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAllflightMutation } from "../../slices/Admin/adminApiSlice";

const AdminFlightPage = () => {
  const [allFlights, setAllFlights] = useState([]);
  const [getAllFlights, { isLoading }] = useAllflightMutation();
  const getAllFlightsData = async () => {
    try {
      const res = await getAllFlights({}).unwrap();
      setAllFlights(res.data);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  useEffect(() => {
    getAllFlightsData();
  }, []);
  const deleteUserData = (flightId, flightName) => {
    const confirm = window.confirm(
      `Do you want to delete? User : ${flightName}`
    );
    if (confirm) {
      setAllFlights(allFlights.filter((item) => item._id !== flightId));
    }
  };
  return (
    <Container>
      <div className="mt-2">
        <div className="d-flex justify-content-between my-2">
          <h3>All Flight Details</h3>
          {isLoading && <Spinner animation="grow" />}
          <Link to="/flightform">
            <Button variant="success">Add flight</Button>
          </Link>
        </div>
        <div className="overflow-y-scroll" style={{ height: "100vh" }}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Airline</th>
                <th>Code</th>
                <th>JourneyDate</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Flight Type</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allFlights.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.flightName}</td>
                    <td>{item.flightCode}</td>
                    <td>{item.journeyDate}</td>
                    <td>{item.origin}</td>
                    <td>{item.destination}</td>
                    <td>{item.flightType}</td>
                    <td>{item.status}</td>
                    <td className="">
                      <Link
                        className="text-decoration-none text-danger m-2"
                        onClick={() =>
                          deleteUserData(item._id, item.flightName)
                        }
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
};

export default AdminFlightPage;
