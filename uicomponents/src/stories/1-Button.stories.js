import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import MyButton from "../components/Button";

export default {
  title: "Button",
  component: Button,
};

export const Test = () => (
  <>
    <MyButton variant="contained" color="primary">
      hello guys
    </MyButton>
    <MyButton variant="contained" color="secondary">
      hello guys
    </MyButton>
    <MyButton variant="contained" color="thirdly">
      hello guys
    </MyButton>
    <MyButton variant="outlined" color="primary">
      hello guys
    </MyButton>
    <MyButton variant="outlined" color="secondary">
      hello guys
    </MyButton>
  </>
);

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
