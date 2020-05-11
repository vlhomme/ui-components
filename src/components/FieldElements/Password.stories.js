import React from "react";
import { storiesOf } from "@storybook/react";
import withFormik from "storybook-formik";
import { Grid } from "@material-ui/core";

import Password from "./Password";

const storiesPassword = storiesOf("Password", module);

storiesPassword
  .addDecorator(withFormik)
  .add("basic Password example", () => (
    <Grid container>
      <Grid item xs={2}>
        <Password />
        <br />
        <Password color="secondary" />
        <br />
        <Password variant={"filled"} />
        <br />
        <Password variant={"filled"} color="secondary" />
      </Grid>
    </Grid>
  ))
  .add("password with strength meter", () => (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Password withStrengthMeter />
        </Grid>
      </Grid>
    </>
  ));
