import React, { useState, Component } from "react";
import PropTypes from "prop-types";
import {
  TextField as MaterialTextfield,
  InputAdornment,
  Grid,
  Tooltip,
  IconButton,
  Typography,
} from "@material-ui/core";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { green, red } from "@material-ui/core/colors";
import { useFormikContext } from "formik";
import theme from "../theme";
import passwords from "../../utils/data/password";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    marginTop: "150px",
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const TextField = (props) => {
  const { withStrengthMeter, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);

  // console.log("withStrengthMeter:", withStrengthMeter);
  const { handleChange, setFieldValue } = useFormikContext();
  const [passwordChecks, setPasswordChecks] = useState([
    {
      msg: "10 caractères minimum",
      error: "length",
    },
    {
      msg: "un caractère spécial",
      error: "specialChar",
    },
    {
      msg: "une lettre en majuscule",
      error: "upperCase",
    },
    {
      msg: "une lettre en minuscule",
      error: "lowerCase",
    },
    {
      msg: "un chiffre",
      error: "digit",
    },
    {
      msg: "mot de passe trop courant",
      error: "poorPassword",
    },
  ]);
  const [passwordStrength, setPasswordStrength] = useState(0);

  if (!withStrengthMeter) {
    return (
      <ThemeProvider theme={theme}>
        <MaterialTextfield
          {...rest}
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
  }

  const containsPoorSecurityString = (password) => {
    for (let index = 0; index < passwords.length; index++) {
      const shitPassword = passwords[index];
      if (password.includes(shitPassword)) return true;
    }
    return false;
  };

  const validate = (motDePasse) => {
    const errors = [];
    if (!motDePasse) {
      errors.push({
        msg: "10 caractères minimum",
        error: "length",
      });
      errors.push({
        msg: "un caractère spécial",
        error: "specialChar",
      });
      errors.push({
        msg: "une lettre en majuscule",
        error: "upperCase",
      });
      errors.push({
        msg: "une lettre en minuscule",
        error: "lowerCase",
      });
      errors.push({
        msg: "un chiffre",
        error: "digit",
      });
      errors.push({
        msg: "mot de passe trop courant",
        error: "poorPassword",
      });
    } else {
      if (motDePasse.length < 10) {
        errors.push({
          msg: "10 caractères minimum",
          error: "length",
        });
      }
      const specialChar = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
      if (!specialChar.test(motDePasse)) {
        errors.push({
          msg: "un caractère spécial",
          error: "specialChar",
        });
      }
      const upperCase = /[A-Z]/;
      if (!upperCase.test(motDePasse)) {
        errors.push({
          msg: "une lettre en majuscule",
          error: "upperCase",
        });
      }
      const lowerCase = /[a-z]/;
      if (!lowerCase.test(motDePasse)) {
        errors.push({
          msg: "une lettre en minuscule",
          error: "lowerCase",
        });
      }
      const digit = /[0-9]/;
      if (!digit.test(motDePasse)) {
        errors.push({
          msg: "un chiffre",
          error: "digit",
        });
      }
      if (containsPoorSecurityString(motDePasse)) {
        errors.push({
          msg: "mot de passe trop courant",
          error: "poorPassword",
        });
      }
    }
    return errors;
  };
  let checkLength;
  let checkUpperCase;
  let checkLowerCase;
  let checkDigits;
  let checkSpecial;
  let checkPoorPassword;
  const checkPasswordError = (errors) => {
    if (errors) {
      let ErrorOnLength = true;
      let ErrorOnDighits = true;
      let ErrorOnLowerCase = true;
      let ErrorOnUpperCase = true;
      let ErrorOnSpecial = true;
      let ErrorOnPoorPassword = true;
      for (let i = 0; i < errors.length; i++) {
        const element = errors[i];
        if (element.error === "length") {
          ErrorOnLength = false;
        } else if (element.error === "specialChar") {
          ErrorOnSpecial = false;
        } else if (element.error === "upperCase") {
          ErrorOnUpperCase = false;
        } else if (element.error === "lowerCase") {
          ErrorOnLowerCase = false;
        } else if (element.error === "digit") {
          ErrorOnDighits = false;
        } else if (element.error === "poorPassword") {
          ErrorOnPoorPassword = false;
        }
      }
      checkPoorPassword = ErrorOnPoorPassword;
      checkLength = ErrorOnLength;
      checkDigits = ErrorOnDighits;
      checkUpperCase = ErrorOnUpperCase;
      checkLowerCase = ErrorOnLowerCase;
      checkSpecial = ErrorOnSpecial;
    }
  };
  checkPasswordError(passwordChecks);

  const calculatePasswordStrength = (passwordValue) => {
    if (passwordValue && passwordValue.length > 0) {
      if (
        passwordValue.length >= 14 &&
        checkDigits &&
        checkUpperCase &&
        checkLowerCase &&
        checkSpecial &&
        checkPoorPassword
      ) {
        return 4;
      } else if (
        checkLength &&
        checkDigits &&
        checkUpperCase &&
        checkLowerCase &&
        checkSpecial
      ) {
        return 3;
      } else if (
        passwordValue.length >= 8 &&
        checkDigits &&
        checkUpperCase &&
        checkLowerCase
      ) {
        return 2;
      } else if (
        passwordValue.length >= 6 &&
        checkLowerCase &&
        checkUpperCase
      ) {
        return 1;
      }
    }
    return 0;
  };

  const displayPasswordStrength = () => {
    if (passwordStrength === 4) return "Force du mot de passe : excellente";
    if (passwordStrength === 3) return "Force du mot de passe : bonne";
    if (passwordStrength === 2) return "Force du mot de passe : moyenne";
    if (passwordStrength === 1) return "Force du mot de passe : faible";
    if (passwordStrength === 0) return "Force du mot de passe : insuffisante";
  };
  console.log("return");
  // console.log("checkLength:", checkLength);
  // console.log("checkUpperCase:", checkUpperCase);
  // console.log("checkLowerCase:", checkLowerCase);
  // console.log("checkDigits:", checkDigits);
  // console.log("checkSpecial:", checkSpecial);
  // console.log("checkPoorPassword:", checkPoorPassword);
  return (
    <ThemeProvider theme={theme}>
      <HtmlTooltip
        title={
          <DisplayPasswordCHecks
            checkLength={checkLength}
            checkUpperCase={checkUpperCase}
            checkLowerCase={checkLowerCase}
            checkDigits={checkDigits}
            checkSpecial={checkSpecial}
            checkPoorPassword={checkPoorPassword}
          />
        }
      >
        <div>
          <MaterialTextfield
            {...rest}
            fullWidth
            type={showPassword ? "text" : "password"}
            onChange={(e) => {
              // 1. formik handle change
              handleChange(e);
              // 2. passing password through various checks for UI
              const tmpChecks = validate(e.target.value);
              setPasswordChecks(tmpChecks);
              checkPasswordError(tmpChecks);
              // 3. Setting Password Strength
              const tmpPassStrength = calculatePasswordStrength(e.target.value);
              // console.log("tmpPassStrength:", tmpPassStrength);
              setPasswordStrength(tmpPassStrength);
              // 4. Pass Password Strength to Formik For validation
              setFieldValue("passwordStrength", tmpPassStrength);
              // console.log(validate(e.target.value));
            }}
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
          {displayPasswordStrength()}
        </div>
      </HtmlTooltip>
      <Grid container style={{ marginTop: "3px" }}>
        <Grid
          item
          xs={3}
          style={{
            backgroundColor:
              passwordStrength > 0
                ? passwordStrength > 2
                  ? green[500]
                  : theme.palette.primary.main
                : red[500],
            height: "5px",
          }}
        ></Grid>
        <Grid
          item
          xs={3}
          style={{
            backgroundColor:
              passwordStrength > 1
                ? passwordStrength > 2
                  ? green[500]
                  : theme.palette.primary.main
                : "white",
            height: "5px",
          }}
        ></Grid>
        <Grid
          item
          xs={3}
          style={{
            backgroundColor: passwordStrength > 2 ? green[500] : "white",
            height: "5px",
          }}
        ></Grid>
        <Grid
          item
          xs={3}
          style={{
            backgroundColor: passwordStrength > 3 ? green[500] : "white",
            height: "5px",
          }}
        ></Grid>
      </Grid>
    </ThemeProvider>
  );
};

TextField.propTypes = {
  dummy: PropTypes.string,
};

export default TextField;

class DisplayPasswordCHecks extends Component {
  render() {
    const {
      checkLength,
      checkUpperCase,
      checkLowerCase,
      checkDigits,
      checkSpecial,
      checkPoorPassword,
    } = this.props;
    return (
      <React.Fragment>
        <Typography color="inherit">Sécurité de votre mot de passe</Typography>
        <div style={{ width: "100%", marginTop: theme.spacing(2) }}>
          <Typography
            style={{
              fontSize: "10px",
              display: "flex",
              alignItems: "center",
              margin: "2px",
              textDecoration: checkLowerCase ? "line-through" : "",
            }}
          >
            <ErrorOutlineIcon
              // color={checkLowerCase ? "secondary" : "primary"}
              style={
                checkLowerCase
                  ? { marginRight: "4px", color: green[500] }
                  : { marginRight: "4px", color: red[500] }
              }
            />
            une lettre en minuscule
          </Typography>
          <Typography
            style={{
              fontSize: "10px",
              display: "flex",
              alignItems: "center",
              margin: "2px",
              textDecoration: checkUpperCase ? "line-through" : "",
            }}
          >
            <ErrorOutlineIcon
              // color={checkUpperCase ? "secondary" : "primary"}
              style={
                checkUpperCase
                  ? { marginRight: "4px", color: green[500] }
                  : { marginRight: "4px", color: red[500] }
              }
            />
            une lettre en majuscule
          </Typography>
          <Typography
            style={{
              fontSize: "10px",
              display: "flex",
              alignItems: "center",
              margin: "2px",
              textDecoration: checkDigits ? "line-through" : "",
            }}
          >
            <ErrorOutlineIcon
              // color={}
              style={
                checkDigits
                  ? { marginRight: "4px", color: green[500] }
                  : { marginRight: "4px", color: red[500] }
              }
            />
            un chiffre
          </Typography>
          <Typography
            style={{
              fontSize: "10px",
              display: "flex",
              alignItems: "center",
              margin: "2px",
              textDecoration: checkSpecial ? "line-through" : "",
            }}
          >
            <ErrorOutlineIcon
              // color={checkSpecial ? "secondary" : "primary"}
              style={
                checkSpecial
                  ? { marginRight: "4px", color: green[500] }
                  : { marginRight: "4px", color: red[500] }
              }
            />
            un caractère spécial
          </Typography>
          <Typography
            style={{
              fontSize: "10px",
              display: "flex",
              alignItems: "center",
              margin: "2px",
              textDecoration: checkLength ? "line-through" : "",
            }}
          >
            <ErrorOutlineIcon
              // color={checkLength ? "secondary" : "primary"}
              style={
                checkLength
                  ? { marginRight: "4px", color: green[500] }
                  : { marginRight: "4px", color: red[500] }
              }
            />
            10 caractères minimum
          </Typography>
          <Typography
            style={{
              fontSize: "10px",
              display: "flex",
              alignItems: "center",
              margin: "2px",
              textDecoration: checkPoorPassword ? "line-through" : "",
            }}
          >
            <ErrorOutlineIcon
              // color={checkPoorPassword ? "secondary" : "primary"}
              style={
                checkPoorPassword
                  ? { marginRight: "4px", color: green[500] }
                  : { marginRight: "4px", color: red[500] }
              }
            />
            mot de passe peu courant
          </Typography>
        </div>
      </React.Fragment>
    );
  }
}
