import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Divider, Typography, Grid } from "@material-ui/core";
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
      height: theme.spacing(45),
    },
  },
}));

const Login = (goToRegister) => {
  const classes = useStyles();
  const { handleSubmit } = useFormikContext();
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Grid container spacing={2} style={{ height: theme.spacing(7) }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={7}>
            <Typography
              variant="button"
              gutterBottom
              style={{
                height: theme.spacing(5),
                width: "100%",
                display: "flex",
                alignItems: "center",
                color: theme.palette.secondary.main,
                cursor: "pointer",
              }}
            >
              créer un compte
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
              height: theme.spacing(20),
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              marginBottom: theme.spacing(5),
              marginTop: theme.spacing(4),
            }}
          >
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
            {/* <TextField label="identifiant" color="secondary" />
            <Password label="mot de passe" color="secondary" /> */}
          </Grid>
          <Grid item xs={1}></Grid> <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleSubmit}
              style={{ height: "60px" }}
            >
              se connecter
            </Button>
          </Grid>{" "}
          <Grid item xs={1}></Grid>
        </Grid>
      </Paper>
    </div>
  );
};

Login.propTypes = {
  dummy: PropTypes.string,
  goToRegister: PropTypes.func,
};

export default Login;
