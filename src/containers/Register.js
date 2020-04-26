import React from "react";
import PropTypes from "prop-types";
import Register from "../components/Forms/Register";
import { Formik } from "formik";
import axios from "axios";

const initialValues = {
  firstname: "",
  lastname: "",
  mail: "",
  password: "",
};

const onSubmit = async (values) => {
  console.log(values);
  const response = await axios.post(
    "http://localhost:5000/api/users/register",
    values
  );
  console.log("response", response);
};

const RegisterContainer = (props) => {
  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Register />
    </Formik>
  );
};

RegisterContainer.propTypes = { dummy: PropTypes.string };

export default RegisterContainer;
