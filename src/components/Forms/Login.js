import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Divider, Typography, Grid } from "@material-ui/core";
import theme from "../theme";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(60),
      height: theme.spacing(60),
    },
  },
}));

const Login = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            {/* <div
              style={{
                backgroundColor: "red",
                display: "flex",
                alignItems: "center",
              }}
            > */}
            <Typography
              variant="button"
              gutterBottom
              style={{ color: theme.palette.secondary.main }}
              align="center"
              display={"block"}
              style={{ height: theme.spacing(5), width: "100%" }}
            >
              create an account
            </Typography>
            {/* </div> */}
          </Grid>
          <Grid item xs={4}></Grid>
          <Divider variant="middle" />
          hello
        </Grid>
      </Paper>
    </div>
  );
};

Login.propTypes = {
  dummy: PropTypes.string,
};

export default Login;
