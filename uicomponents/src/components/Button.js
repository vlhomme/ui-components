import React from "react";
import PropTypes from "prop-types";
import { Button as MaterialButton } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const Button = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MaterialButton {...props}>{props.children}</MaterialButton>
    </ThemeProvider>
  );
};

Button.propTypes = {
  dummy: PropTypes.bool,
};

export default Button;
