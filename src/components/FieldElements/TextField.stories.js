import React from "react";
import TextField from "./TextField";

export default {
  title: "TextField",
  component: TextField,
};

export const TextFields = () => (
  <>
    <TextField />
    <br />
    <TextField color="secondary" />
    <br />
    <TextField variant={"outlined"} margin={"dense"} />
    <br />
    <TextField variant={"filled"} />
    <br />
    <TextField variant={"filled"} color="secondary" />
  </>
);
