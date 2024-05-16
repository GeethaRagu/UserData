import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ErrorMessage, Formik, useFormik } from "formik";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import * as Yup from "yup";
const EditUser = ({ userid }) => {
  const [edituser, setEditUser] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      suite: "",
      street: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const validationschema = Yup.object().shape({
    name: Yup.string().required("Field is empty"),
    username: Yup.string().required("Field is empty"),
    email: Yup.string().required("Field is empty"),
    address: Yup.object().shape({
      suite: Yup.string().required("Field is empty"),
      street: Yup.string().required("Field is empty"),
      city: Yup.string().required("Field is empty"),
      zipcode: Yup.string().required("Field is empty"),
      geo: Yup.object().shape({
        lat: Yup.string().required("Field is empty"),
        lng: Yup.string().required("Field is empty"),
      }),
    }),
    phone: Yup.string().required("Field is empty"),
    website: Yup.string().required("Field is empty"),
    company: Yup.object().shape({
      name: Yup.string().required("Field is empty"),
      catchPhrase: Yup.string().required("Field is empty"),
      bs: Yup.string().required("Field is empty"),
    }),
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    formik.setValues(edituser);
    //console.log("user", edituser);
  }, [edituser]);

  const handleSubmit = async (values) => {
    //console.log(values);
    await axios
      .put(
        `https://6643a2606c6a65658707de9e.mockapi.io/api/userdata/${Number(
          id
        )}`,
        values
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    navigate("/users");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      address: {
        suite: "",
        street: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    },
    validationSchema:validationschema,
    onSubmit: handleSubmit,
  });

  const fetchdata = async () => {
    await axios
      .get(
        `https://6643a2606c6a65658707de9e.mockapi.io/api/userdata/${Number(id)}`
      )
      .then((res) => {
        setEditUser(res.data);
        //console.log("response", res.data);
        // console.log("user", edituser);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section>
      <Container>
        <h1>Edit User</h1>
        <Row className="gx-4 gy-2 gx-lg-5 row-cols-1 userlist_container">
          <Formik>
          <form onSubmit={formik.handleSubmit} className="myform">
            <Col>
              <div>
                <label htmlFor="name">Name :</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <ErrorMessage
                    name="name"
                    component="h6"
                    className="error_message"
                  />
              </div>
              
              <div className="error_message">{formik.errors.name}</div>
              <div>
                <label htmlFor="username">Username :</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
                
              </div>
              <div className="error_message">{formik.errors.username}</div>
              <div>
                <label htmlFor="email">Email address :</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="error_message">{formik.errors.email}</div>
              <div>
                <h6>Address ::</h6>

                <label htmlFor="suite">Suite :</label>
                <input
                  type="text"
                  name="address.suite"
                  id="suite"
                  value={formik.values.address.suite}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="error_message">{formik.errors.suite}</div>
              <div>
                <label htmlFor="street">Street :</label>
                <input
                  type="text"
                  name="address.street"
                  id="street"
                  value={formik.values.address.street}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="error_message">{formik.errors.street}</div>
              <div>
                <label htmlFor="city">City :</label>
                <input
                  type="text"
                  name="address.city"
                  id="city"
                  value={formik.values.address.city}
                  onChange={formik.handleChange} 
                />
              </div>
              <div className="error_message">{formik.errors.city}</div>
              <div>
                <label htmlFor="zipcode">Zipcode :</label>
                <input
                  type="text"
                  name="address.zipcode"
                  id="zipcode"
                  value={formik.values.address.zipcode}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="error_message">{formik.errors.zipcode}</div>
              <div>
                <h6>Geo:</h6>
                <label htmlFor="lat">Latitude :</label>
                <input
                  type="text"
                  name="address.geo.lat"
                  id="lat"
                  value={formik.values.address.geo.lat}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="error_message">{formik.errors.lat}</div>
              <div>
                <label htmlFor="lng">Longitude :</label>
                <input
                  type="text"
                  name="address.geo.lng"
                  id="lng"
                  value={formik.values.address.geo.lng}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="error_message">{formik.errors.lng}</div>
            </Col>
            <Col>
              <div>
                <label htmlFor="phone">Phone :</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="error_message">{formik.errors.phone}</div>
              <div>
                <label htmlFor="website">Website :</label>
                <input
                  type="text"
                  name="website"
                  id="website"
                  value={formik.values.website}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="error_message">{formik.errors.website}</div>
              <div>
                <h6>Company ::</h6>

                <label htmlFor="companyname">Name :</label>
                <input
                  type="text"
                  name="company.name"
                  id="companyname"
                  value={formik.values.company.name}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="error_message">{formik.errors.name}</div>
              <div>
                <label htmlFor="catchPhrase">CatchPhrase :</label>
                <input
                  type="text"
                  name="company.catchPhrase"
                  id="catchPhrase"
                  value={formik.values.company.catchPhrase}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="error_message">{formik.errors.catchPhrase}</div>
              <div>
                <label htmlFor="bs">Bs :</label>
                <input
                  type="text"
                  name="company.bs"
                  id="bs"
                  value={formik.values.company.bs}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="error_message">{formik.errors.bs}</div>
              <Button className="btn btn-primary mt-5" type="submit">
                Update
              </Button>
            </Col>
          </form>
          </Formik>
        </Row>
      </Container>
    </section>
  );
};

export default EditUser;
