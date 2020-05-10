import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  TextField as MaterialTextfield,
  InputAdornment,
  Grid,
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
        // value={}
        // onChange={}
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
      <Grid container style={{ marginTop: "3px" }}>
        <Grid
          item
          xs={3}
          style={{ backgroundColor: theme.palette.primary.main, height: "5px" }}
        ></Grid>
        <Grid
          item
          xs={3}
          style={{ backgroundColor: theme.palette.primary.main, height: "5px" }}
        ></Grid>
        <Grid
          item
          xs={3}
          style={{ backgroundColor: theme.palette.primary.main, height: "5px" }}
        ></Grid>
        <Grid
          item
          xs={3}
          style={{ backgroundColor: "white", height: "5px" }}
        ></Grid>
        Force du mot de passe : faible
      </Grid>
    </ThemeProvider>
  );
};

TextField.propTypes = {
  dummy: PropTypes.string,
};

export default TextField;
