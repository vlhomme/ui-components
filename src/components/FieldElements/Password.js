import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  TextField as MaterialTextfield,
  InputAdornment,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

const TextField = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <MaterialTextfield
        {...props}
        fullWidth
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={(e) => e.preventDefault()}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </ThemeProvider>
  );
};

TextField.propTypes = {};

export default TextField;
