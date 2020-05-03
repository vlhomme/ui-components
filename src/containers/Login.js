import React from "react";
import PropTypes from "prop-types";
import Login from "../components/Forms/Login";
import { Formik } from "formik";
import axios from "axios";

const initialValues = {
  mail: "",
  password: "",
};

const onSubmit = async (values) => {
  console.log(values);
  const response = await axios.post(
    "http://localhost:5000/api/users/login",
    values
  );
  console.log("response", response);
};

const LoginContainer = ({ goToRegister }) => {
  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Login goToRegister={goToRegister} />
    </Formik>
  );
};

LoginContainer.propTypes = {
  dummy: PropTypes.string,
  goToRegister: PropTypes.func,
};

export default LoginContainer;
