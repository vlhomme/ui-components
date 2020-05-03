import React from "react";
import PropTypes from "prop-types";
import Register from "../components/Forms/Register";
import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";

const initialValues = {
  firstname: "",
  lastname: "",
  mail: "",
  password: "",
};

const validationSchema = Yup.object({
  // password: Yup.string().required("Password is required"),
  password: Yup.string().required("Password is required").min(10),
});

// could be interesting to pass validate function to a promise (see validate documentation in formik)
const validate = (values) => {
  const errors = {};
  errors.passwordTest = [];
  if (!values.password) {
    errors.passwordTest.push("required");
  } else {
    if (values.password.length < 10) {
      errors.passwordTest.push({
        msg: "le mot de passe doit comprendre 10 caractères minimum",
        error: "length",
      });
    }
    const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!specialChar.test(values.password)) {
      errors.passwordTest.push({
        msg: "le mot de passe doit comprendre un caractère spécial",
        error: "specialChar",
      });
    }
    const upperCase = /[A-Z]/;
    if (!upperCase.test(values.password)) {
      errors.passwordTest.push({
        msg: "Le mot de passe doit comprendre une lettre en majuscule",
        error: "upperCase",
      });
    }
    const lowerCase = /[a-z]/;
    if (!lowerCase.test(values.password)) {
      errors.passwordTest.push({
        msg: "Le mot de passe doit comprendre une lettre en minuscule",
        error: "lowerCase",
      });
    }
    const digit = /[0-9]/;
    if (!digit.test(values.password)) {
      errors.passwordTest.push({
        msg: "Le mot de passe doit comprendre un chiffre",
        error: "digit",
      });
    }
  }
  return errors;
};

const onSubmit = async (values) => {
  console.log(values);
  const response = await axios.post(
    "http://localhost:5000/api/users/register",
    values
  );
  console.log("response", response);
};

const RegisterContainer = ({ goToLogin }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Register goToLogin={goToLogin} />
    </Formik>
  );
};

RegisterContainer.propTypes = { goToLogin: PropTypes.func };

export default RegisterContainer;
