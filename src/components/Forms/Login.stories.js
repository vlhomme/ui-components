import React from "react";
import { storiesOf } from "@storybook/react";
import withFormik from "storybook-formik";
import Login from "./Login";
import theme from "../theme";

// export default {
//   title: "Login",
//   component: Login,
// };

storiesOf("Login", module)
  .addDecorator(withFormik)
  .add("test", () => (
    <div
      style={{
        backgroundColor: theme.palette.primary.main,
        width: "800px",
        height: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <Login />
    </div>
  ));

// export const Logins = () => (
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
//     <Login />
//   </div>
// );
