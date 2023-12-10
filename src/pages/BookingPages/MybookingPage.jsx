import React, { useEffect, useState } from "react";
import { Button, Container, Spinner, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useGetUserByIdQuery } from "../../slices/Users/userApiSlice";
import { setCredentials } from "../../slices/Users/userSlice";

const MybookingsPage = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const { data: user, isLoading } = useGetUserByIdQuery();
  const mybookings = userData?.data?.mybookings;
  useEffect(() => {
    if (!isLoading && user) {
      setUserData(user);
      dispatch(setCredentials({ ...user }));
    }
  }, [user, isLoading, mybookings]);
  return (
    <>
      <Container className="d-flex justify-content-between my-2">
        <h3>My Trips</h3>
        <Link to="/search">
          <Button>Book One More</Button>
        </Link>
      </Container>
      <div className="overflow-y-scroll" style={{ height: "65vh" }}>
        {user && mybookings ? (
          <Table striped bordered hover size="sm">
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
        ) : (
          <Spinner animation="grow" />
        )}
      </div>
    </>
  );
};

export default MybookingsPage;
