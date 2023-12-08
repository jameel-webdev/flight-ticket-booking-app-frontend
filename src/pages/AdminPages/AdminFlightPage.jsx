import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetallflightsQuery } from "../../slices/Flights/flightApiSlice";

const AdminFlightPage = () => {
  const [allFlights, setAllFlights] = useState([]);
  const {
    data: flights,
    isLoading,
    refetch: refetchFlights,
  } = useGetallflightsQuery({ search: {} });
  useEffect(() => {
    refetchFlights();
    if (!isLoading && flights) {
      setAllFlights(flights.data);
    }
  }, [flights, isLoading]);
  const deleteUserData = (flightId) => {
    const confirm = window.confirm(
      `Not an actual API Call\nDo you want to delete?`
    );
    if (confirm) {
      setAllFlights(allFlights.filter((item) => item._id !== flightId));
    }
  };
  return (
    <Container>
      {flights && allFlights ? (
        <div className="mt-2">
          <div className="d-flex justify-content-between my-2">
            <h3>All Flight Details</h3>
            <Link to="/flightform">
              <Button variant="success">Add flight</Button>
            </Link>
          </div>
          <div className="overflow-y-scroll" style={{ height: "65vh" }}>
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
                        <Col>
                          <Link
                            className="text-decoration-none text-info m-2"
                            onClick={() => alert(`Features Coming Soon!`)}
                          >
                            Update
                          </Link>
                          <Link
                            className="text-decoration-none text-danger m-2"
                            onClick={() =>
                              deleteUserData(item._id, item.flightName)
                            }
                          >
                            Delete
                          </Link>
                        </Col>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      ) : (
        <Spinner animation="grow" />
      )}
    </Container>
  );
};

export default AdminFlightPage;
