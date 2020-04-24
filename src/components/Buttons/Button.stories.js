import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Buttons = () => (
  <>
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
  </>
);
