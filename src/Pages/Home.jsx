import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);  //users array to store fetch data
  const[deletedata,setDeleteData] = useState([]);  // array to store deleted data
  const navigate = useNavigate();

  useEffect(() => {
    fetchdata();
  }, []);
  
  //fetch data using axios
  const fetchdata = async () => {
    await axios
      .get("https://6643a2606c6a65658707de9e.mockapi.io/api/userdata")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  };


  return (
    //    Product list starts
    <section>
      <Container>
        <Row className="gx-4 gy-2 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {/* map all the products and display name,price,desc and image */}
          {users.map((element, index) => {
            return (
              <Col key={index}>
                <CardGroup>
                  <Card>
                    <Card.Body>
                      <Card.Title>{element.name}</Card.Title>
                      <Card.Text>
                        <i className="ri-id-card-fill"></i>&nbsp;
                        {element.username}
                      </Card.Text>
                      <Card.Text>
                        <i className="ri-mail-fill"></i>&nbsp;
                        <a href={`mailto:${element.email}`}>{element.email}</a>
                      </Card.Text>
                      <Card.Text>
                        
                        <i className="ri-building-4-fill"></i>&nbsp;
                          {element.address.suite},{element.address.street},
                          <br />
                          {element.address.city}.<br/>{element.address.zipcode}
                      
                      </Card.Text>
                      <Card.Text>
                      <i className="ri-map-pin-line"></i>&nbsp;
                      {/* {element.address.geo.lat} ,{element.address.geo.lng} */}
                        <a href={`http://maps.google.com/?q=${element.address.geo.lat},${element.address.geo.lng}`}>My location</a>
                      </Card.Text>
                      <Card.Text>
                      <i className="ri-phone-fill"></i>&nbsp;
                        {element.phone}
                      </Card.Text>
                      <Card.Text>
                        <i className="ri-pages-fill"></i>&nbsp;
                        <a href={`https://${element.website}`} target="_blank">{element.website}</a>
                      </Card.Text>
                      <Card.Text>
                        
                        Company:<br/>
                          {element.company.companyname}
                          <br />
                          {element.company.catchPhrase}
                          <br/>{element.company.bs}
                        
                      </Card.Text>
                    </Card.Body>
                    
                  </Card>
                </CardGroup>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
    //   Product list ends
  );
};

export default Home;
