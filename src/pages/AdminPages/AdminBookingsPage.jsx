import React, { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetallbookingsQuery } from "../../slices/Bookings/bookingApiSlice";
const AdminBookingsPage = () => {
  const [allBookings, setAllBookings] = useState([]);
  const {
    data: bookings,
    isLoading,
    refetch: refetchBookings,
  } = useGetallbookingsQuery();
  useEffect(() => {
    refetchBookings();
    if (!isLoading && bookings) {
      setAllBookings(bookings.data);
    }
  }, [bookings, isLoading]);
  const deleteUserData = (userId, name) => {
    const confirm = window.confirm(
      `Not an actual API Call \nDo you want to delete?`
    );
    if (confirm) {
      setAllUsers(allUsers.filter((item) => item._id !== userId));
    }
  };
  return (
    <Container>
      <h3>All Bookings Detail</h3>
      {bookings && allBookings ? (
        <div className="overflow-y-scroll" style={{ height: "65vh" }}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Booking Id</th>
                <th>Flight Id</th>
                <th>User Id</th>
                <th>Seats Booked</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allBookings.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item._id}</td>
                    <td>{item.flight}</td>
                    <td>{item.user}</td>
                    <td>{item.seatsBooked.map((i) => i).join(", ")}</td>
                    <td className="">
                      <Link
                        className="text-decoration-none text-info m-2"
                        onClick={() => alert(`Features Coming Soon!`)}
                      >
                        Update
                      </Link>
                      <Link
                        className="text-decoration-none text-danger m-2"
                        onClick={() => deleteUserData(item._id, item.name)}
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
      ) : (
        <Spinner animation="grow" />
      )}
    </Container>
  );
};

export default AdminBookingsPage;
