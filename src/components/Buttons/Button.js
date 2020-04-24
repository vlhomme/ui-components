import React from "react";
import PropTypes from "prop-types";
import { Button as MaterialButton } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import theme from "../theme";

const Button = ({ gradient = false, ...rest }) => {
  const newThemeWithGradient = createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 30%, #FF4D00 90%)`,
          color: rest.variant === "outlined" ? "transparent" : "white",
        },
        outlined: {
          backgroundClip: "text",
          border: "2px solid",
          borderRadius: "5px",
          borderImageSlice: "1",
          borderWidth: "2px",
          borderImageSource: `linear-gradient(to left, ${theme.palette.primary.main}, #FF4D00)`,
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
          <MaterialButton fullWidth {...rest}>
            {rest.children}
          </MaterialButton>
        </ThemeProvider>
      ) : (
        <MaterialButton fullWidth {...rest}>
          {rest.children}
        </MaterialButton>
      )}
    </ThemeProvider>
  );
};

Button.propTypes = {
  gradient: PropTypes.bool,
};

export default Button;
