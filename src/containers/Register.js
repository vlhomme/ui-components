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
  firstname: Yup.string().required("Prénom requis"),
  lastname: Yup.string().required("Nom requis"),
  mail: Yup.string()
    .required("Email requis")
    .email("vous devez rentrer un email valide"),
  password: Yup.string().required("Mot de passe requis").min(10),
  passwordStrength: Yup.number().min(
    1,
    "votre mot de passe doit contenir au moins 6 caractères, une majuscule et une minuscule"
  ),
});

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
      onSubmit={onSubmit}
    >
      <Register goToLogin={goToLogin} />
    </Formik>
  );
};

RegisterContainer.propTypes = { goToLogin: PropTypes.func };

export default RegisterContainer;
