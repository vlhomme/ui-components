import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Divider, Typography, Grid } from "@material-ui/core";
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
      height: theme.spacing(40),
    },
  },
}));

const Login = (props) => {
  const classes = useStyles();
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
                color: theme.palette.primary.main,
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
              marginBottom: theme.spacing(2),
              marginTop: theme.spacing(2),
            }}
          >
            <TextField label="identifiant" color="secondary" />
            <Password label="mot de passe" color="secondary" />
          </Grid>
          <Grid item xs={1}></Grid> <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Button
              color="secondary"
              variant="contained"
              fullwidth={false}
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
};

export default Login;
