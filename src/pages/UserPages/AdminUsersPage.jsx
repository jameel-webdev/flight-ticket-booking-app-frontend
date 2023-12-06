import React, { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAllusersMutation } from "../../slices/Admin/adminApiSlice";
import { toast } from "react-toastify";

const AdminUsersPage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [getAllUsers, { isLoading }] = useAllusersMutation();
  const getAllUsersData = async () => {
    try {
      const res = await getAllUsers({}).unwrap();
      setAllUsers(res.data);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  useEffect(() => {
    getAllUsersData();
  }, []);

  const deleteUserData = (userId, name) => {
    const confirm = window.confirm(`Do you want to delete? User : ${name}`);
    if (confirm) {
      setAllUsers(allUsers.filter((item) => item._id !== userId));
    }
  };

  return (
    <Container>
      <h3>All User Details</h3>
      {isLoading && <Spinner animation="grow" />}
      <div className="overflow-y-scroll" style={{ height: "65vh" }}>
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
            {allUsers.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td className="">
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
    </Container>
  );
};

export default AdminUsersPage;
