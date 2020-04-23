import React from "react";
import Password from "./Password";

export default {
  title: "Password",
  component: Password,
};

export const Passwords = () => (
  <>
    <Password />
    <br />
    <Password color="secondary" />
    <br />
    <Password variant={"filled"} />
    <br />
    <Password variant={"filled"} color="secondary" />
  </>
);
