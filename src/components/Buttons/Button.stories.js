import React from "react";
import { Grid } from "@material-ui/core";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Buttons = () => (
  <Grid container>
    <Grid item xs={2}>
      <Button variant="contained" color="primary">
        hello guys
      </Button>
      <br /> <br />
      <Button variant="contained" color="secondary">
        hello guys
      </Button>
      <br /> <br />
      <Button gradient variant="contained">
        hello guys
      </Button>
      <br /> <br />
      <Button gradient variant="outlined">
        hello guys
      </Button>
      <br /> <br />
      <Button variant="outlined" color="primary">
        hello guys
      </Button>
      <br /> <br />
      <Button variant="outlined" color="secondary">
        hello guys
      </Button>
    </Grid>
  </Grid>
);
