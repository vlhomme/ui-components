import React from "react";
import { storiesOf } from "@storybook/react";
import withFormik from "storybook-formik";
import Register from "./Register";
import theme from "../theme";

storiesOf("Register", module)
  .addDecorator(withFormik)
  .add("register", () => (
    <div
    // style={{
    //   backgroundColor: theme.palette.primary.main,
    //   width: "800px",
    //   height: "1000px",
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   marginTop: "50px",
    // }}
    >
      <Register />
    </div>
  ));

// export default {
//   title: "Register",
//   component: Register,
// };

// export const Registers = () => (
//   <div
//     style={{
//       backgroundColor: theme.palette.primary.main,
//       width: "800px",
//       height: "600px",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       marginTop: "50px",
//     }}
//   >
//     <Register />
//   </div>
// );
