import React from "react";
import { Grid } from "@material-ui/core";
import TextField from "./TextField";

export default {
  title: "TextField",
  component: TextField,
};

export const TextFields = () => (
  <Grid container>
    <Grid item xs={2}>
      <TextField />
      <br />
      <TextField color="secondary" />
      <br />
      <TextField variant={"outlined"} margin={"dense"} />
      <br />
      <TextField variant={"filled"} />
      <br />
      <TextField variant={"filled"} color="secondary" />
    </Grid>
  </Grid>
);
