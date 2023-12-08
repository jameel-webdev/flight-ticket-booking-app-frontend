import React, { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { useGetallusersQuery } from "../../slices/Users/userApiSlice";
import { Link } from "react-router-dom";

const AdminUsersPage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const {
    data: users,
    isLoading,
    refetch: refetchUsers,
  } = useGetallusersQuery();
  useEffect(() => {
    refetchUsers();
    if (!isLoading && users) {
      setAllUsers(users.data);
    }
  }, [users, isLoading]);
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
      <h3>All User Details</h3>
      {users && allUsers ? (
        <div className="overflow-y-scroll" style={{ height: "65vh" }}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
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

export default AdminUsersPage;
