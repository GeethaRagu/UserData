import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
const CreateUser = () => {
  const initialValues = {
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
  };
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
  const handleSubmit = async (values) => {
    //console.log(values);
    await axios
      .post("https://6643a2606c6a65658707de9e.mockapi.io/api/userdata", values)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    navigate("/users");
  };
  return (
    <section>
      <Container class="userlist_container">
        <h1>Create a new User</h1>
        <Row className="gx-4 gy-2 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
          <Formik
            initialValues={initialValues}
            validationSchema={validationschema}
            onSubmit={handleSubmit}
          >
            <Form className="myform">
              <Col>
                <div>
                  <label>Name:</label>
                  <Field type="text" name="name" />
                  <ErrorMessage
                    name="name"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>Email:</label>
                  <Field type="email" name="email" />
                  <ErrorMessage
                    name="email"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>UserName:</label>
                  <Field type="text" name="username" />
                  <ErrorMessage
                    name="username"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>Suite:</label>
                  <Field type="text" name="address.suite" />
                  <ErrorMessage
                    name="address.suite"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>Street:</label>
                  <Field type="text" name="address.street" />
                  <ErrorMessage
                    name="address.street"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>City:</label>
                  <Field type="text" name="address.city" />
                  <ErrorMessage
                    name="address.city"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>Zipcode:</label>
                  <Field type="text" name="address.zipcode" />
                  <ErrorMessage
                    name="address.zipcode"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>Lat:</label>
                  <Field type="text" name="address.geo.lat" />
                  <ErrorMessage
                    name="address.geo.lat"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>Lng:</label>
                  <Field type="text" name="address.geo.lng" />
                  <ErrorMessage
                    name="address.geo.lng"
                    component="h6"
                    className="error_message"
                  />
                </div>
              </Col>
              <Col>
                <div>
                  <label>Phone:</label>
                  <Field type="text" name="phone" />
                  <ErrorMessage
                    name="phone"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>Website:</label>
                  <Field type="text" name="website" />
                  <ErrorMessage
                    name="website"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>Companyname:</label>
                  <Field type="text" name="company.name" />
                  <ErrorMessage
                    name="company.name"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>CatchPhrase:</label>
                  <Field type="text" name="company.catchPhrase" />
                  <ErrorMessage
                    name="company.catchPhrase"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>Company-bs:</label>
                  <Field type="text" name="company.bs" />
                  <ErrorMessage
                    name="company.bs"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <Button variant="success" type="submit" className="mt-5">Create</Button>
              </Col>
            </Form>
          </Formik>
        </Row>
      </Container>
    </section>
  );
};

export default CreateUser;
