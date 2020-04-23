import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Test = () => (
  <>
    <Button variant="contained" color="primary">
      hello guys
    </Button>
    <Button variant="contained" color="secondary">
      hello guys
    </Button>
    <Button gradient variant="contained">
      hello guys
    </Button>
    <Button gradient variant="outlined">
      hello guys
    </Button>

    <Button variant="outlined" color="primary">
      hello guys
    </Button>
    <Button variant="outlined" color="secondary">
      hello guys
    </Button>
  </>
);
