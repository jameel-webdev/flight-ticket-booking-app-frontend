import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const MybookingsPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const mybookings = userInfo.mybookings;
  console.log(mybookings);

  return (
    <>
      <div>Mybookings</div>
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
              <tr>
                <td>{item._id}</td>
                <td>{item.flightCode}</td>
                <td>{item.flightName}</td>
                <td>{item.journeyDate}</td>
                <td>{item.seatsBooked.map((i) => i)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default MybookingsPage;
