import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { green, red } from "@material-ui/core/colors";
import {
  Paper,
  Divider,
  Typography,
  Grid,
  ThemeProvider,
} from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { Field, useFormikContext } from "formik";

import theme from "../theme";

import Password from "../FieldElements/Password";
import TextField from "../FieldElements/TextField";
import Button from "../Buttons/Button";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(64),
    },
  },
}));

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

const Register = ({ goToLogin }) => {
  const classes = useStyles();
  const { handleSubmit, errors, dirty } = useFormikContext();

  let checkLength;
  let checkUpperCase;
  let checkLowerCase;
  let checkDigits;
  let checkSpecial;
  let checkPoorPassword;
  const checkPasswordError = (errors, dirty) => {
    if (dirty) {
      checkDigits = true;
      checkLength = true;
      checkUpperCase = true;
      checkLowerCase = true;
      checkSpecial = true;
      checkPoorPassword = true;
    } else {
      checkDigits = false;
      checkLength = false;
      checkUpperCase = false;
      checkLowerCase = false;
      checkSpecial = false;
      checkPoorPassword = false;
    }

    if (errors && errors.passwordTest) {
      let ErrorOnLength = true;
      let ErrorOnDighits = true;
      let ErrorOnLowerCase = true;
      let ErrorOnUpperCase = true;
      let ErrorOnSpecial = true;
      let ErrorOnPoorPassword = true;
      for (let i = 0; i < errors.passwordTest.length; i++) {
        const element = errors.passwordTest[i];
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

  checkPasswordError(errors, dirty);
  // console.log("checkLength:", checkLength);
  // console.log("checkDigits:", checkDigits);
  // console.log("checkUpperCase:", checkUpperCase);
  // console.log("checkLowerCase:", checkLowerCase);
  // console.log("checkSpecial:", checkSpecial);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <Grid
            container
            spacing={2}
            style={{
              height: theme.spacing(7),
            }}
          >
            <Grid item xs={1}></Grid>
            <Grid item xs={7}>
              <Typography
                variant="button"
                gutterBottom
                onClick={goToLogin}
                style={{
                  height: theme.spacing(5),
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: theme.palette.primary.main,
                  cursor: "pointer",
                }}
              >
                se connecter
              </Typography>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
          <Divider variant="middle" />
          <Grid container spacing={2}>
            <Grid item xs={1}></Grid>
            <Grid
              item
              xs={10}
              style={{
                display: "flex",
                //   backgroundColor: theme.palette.primary.light,
                // height: theme.spacing(25),
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                marginBottom: theme.spacing(2),
                marginTop: theme.spacing(2),
              }}
            >
              <Field
                as={TextField}
                type="input"
                label="prénom"
                name="firstname"
                color="primary"
              />
              <Field
                as={TextField}
                type="input"
                label="nom"
                name="lastname"
                color="primary"
              />
              <Field
                as={TextField}
                type="input"
                label="mail"
                name="mail"
                color="primary"
              />
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      Sécurité de votre mot de passe
                    </Typography>
                    <div style={{ width: "100%", marginTop: theme.spacing(2) }}>
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
                          textDecoration: checkPoorPassword
                            ? "line-through"
                            : "",
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
                        mot de passe trop courant
                      </Typography>
                    </div>
                  </React.Fragment>
                }
              >
                <Field
                  as={Password}
                  label="mot de passe"
                  name="password"
                  color="primary"
                />
              </HtmlTooltip>
            </Grid>
            <Grid item xs={1}></Grid> <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      Sécurité de votre mot de passe
                    </Typography>
                    <div style={{ width: "100%", marginTop: theme.spacing(2) }}>
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
                          textDecoration: checkPoorPassword
                            ? "line-through"
                            : "",
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
                        mot de passe difficile à deviner
                      </Typography>
                    </div>
                  </React.Fragment>
                }
              >
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleSubmit}
                  style={{ height: "60px" }}
                >
                  créer un compte
                </Button>
              </HtmlTooltip>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

Register.propTypes = {
  goToLogin: PropTypes.func,
};

export default Register;
