import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col , Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Users = ({ setUserId }) => {
  const [user, setUser] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    await axios
      .get("https://6643a2606c6a65658707de9e.mockapi.io/api/userdata/")
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error));
  };
  //Edit user
  const handleEdit=(id)=>{
    setUserId(id);
    navigate(`/edituser/${parseInt(id)}`);
};

  // delete user
  const handleDelete = async (id)=>{
    await axios.delete(`https://6643a2606c6a65658707de9e.mockapi.io/api/userdata/${id}`)
                .then((res)=>setDeleteData(res.data))
                .catch((error)=>console.log(error));
};
  return (
    //User list starts
    <section>
      <Container>
        <Row className="row-cols-1 row-cols-md-3">
          <Col className="col-12 col-md-12">
            <Table striped className="border border-dark rounded">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
                  <th colSpan={2}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {user.map((ele, index) => {
                  return (
                    <tr key={index}>
                      <td>{ele.id}</td>
                      <td>{ele.name}</td>
                      <td>{ele.username}</td>
                      <td>{ele.email}</td>
                      <td>{ele.phone}</td>
                      <td>{ele.website}</td>
                      <td><Button variant="success" onClick={()=>{handleEdit(ele.id)}}>Edit</Button></td>
                      <td><Button variant="danger" onClick={()=>{handleDelete(ele.id)}}>Delete</Button></td>
                      
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
    // User list ends
  );
};

export default Users;
