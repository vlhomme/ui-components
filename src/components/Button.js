import React from "react";
import PropTypes from "prop-types";
import { Button as MaterialButton } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import theme from "./theme";

const Button = ({ gradient = false, ...rest }) => {
  // const newThemeWithGradient = { ...theme };
  const newThemeWithGradient = createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 30%, #FF4D00 90%)`,
          color: "white",
        },
        outlined: {
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 30%, #FF4D00 90%)`,
          color: "white",
        },
        contained: {
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 30%, #FF4D00 90%)`,
          color: "white",
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      {gradient ? (
        <ThemeProvider theme={newThemeWithGradient}>
          <MaterialButton {...rest}>{rest.children}</MaterialButton>
        </ThemeProvider>
      ) : (
        <MaterialButton {...rest}>{rest.children}</MaterialButton>
      )}
    </ThemeProvider>
  );
};

Button.propTypes = {
  gradient: PropTypes.bool,
};

export default Button;