import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Divider, Typography, Grid } from "@material-ui/core";
import { Field, useFormikContext } from "formik";

import theme from "../theme";

import Password from "../FieldElements/Password";
import TextField from "../FieldElements/TextField";
import Button from "../Buttons/Button";

import Digits from "../Icons/Digits";
import Lowercase from "../Icons/Lowercase";
import UpperCase from "../Icons/UpperCase";
import Ten from "../Icons/Ten";
import Special from "../Icons/Special";

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

const Register = ({ goToLogin }) => {
  const classes = useStyles();
  const { handleSubmit, errors, dirty } = useFormikContext();

  let checkLength;
  let checkUpperCase;
  let checkLowerCase;
  let checkDigits;
  let checkSpecial;
  const checkPasswordError = (errors, dirty) => {
    if (dirty) {
      checkDigits = true;
      checkLength = true;
      checkUpperCase = true;
      checkLowerCase = true;
      checkSpecial = true;
    } else {
      checkDigits = false;
      checkLength = false;
      checkUpperCase = false;
      checkLowerCase = false;
      checkSpecial = false;
    }

    if (errors && errors.passwordTest) {
      let ErrorOnLength = true;
      let ErrorOnDighits = true;
      let ErrorOnLowerCase = true;
      let ErrorOnUpperCase = true;
      let ErrorOnSpecial = true;
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
        }
      }
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
                color: theme.palette.secondary.main,
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
              color="secondary"
            />
            <Field
              as={TextField}
              type="input"
              label="nom"
              name="lastname"
              color="secondary"
            />
            <Field
              as={TextField}
              type="input"
              label="mail"
              name="mail"
              color="secondary"
            />
            <Field
              as={Password}
              label="mot de passe"
              name="password"
              color="secondary"
            />
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
                <Ten
                  color={checkLength ? "primary" : "secondary"}
                  style={{ marginRight: "4px" }}
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
                <Digits
                  color={checkDigits ? "primary" : "secondary"}
                  style={{ marginRight: "4px" }}
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
                <Special
                  color={checkSpecial ? "primary" : "secondary"}
                  style={{ marginRight: "4px" }}
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
                <UpperCase
                  color={checkUpperCase ? "primary" : "secondary"}
                  style={{ marginRight: "4px" }}
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
                <Lowercase
                  color={checkLowerCase ? "primary" : "secondary"}
                  style={{ marginRight: "4px" }}
                />
                une lettre en minuscule
              </Typography>
            </div>
          </Grid>
          <Grid item xs={1}></Grid> <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleSubmit}
              style={{ height: "60px" }}
            >
              créer un compte
            </Button>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Paper>
    </div>
  );
};

Register.propTypes = {
  goToLogin: PropTypes.func,
};

export default Register;
