import React from "react";
import Register from "./Register";
import theme from "../theme";

export default {
  title: "Register",
  component: Register,
};

export const Registers = () => (
  <div
    style={{
      backgroundColor: theme.palette.primary.main,
      width: "800px",
      height: "600px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "50px",
    }}
  >
    <Register />
  </div>
);
