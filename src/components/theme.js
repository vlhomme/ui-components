import { createMuiTheme } from "@material-ui/core/styles";
import amber from "@material-ui/core/colors/amber";
// import purple from "@material-ui/core/colors/purple";
// import deepPurple from "@material-ui/core/colors/deepPurple";
// import indigo from "@material-ui/core/colors/indigo";
// import blue from "@material-ui/core/colors/blue";
// import lime from "@material-ui/core/colors/lime";
// import yellow from "@material-ui/core/colors/yellow";

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: { main: "#FF4D00" },
  },
  status: {
    danger: "red",
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: "white",
      },
    },
  },
});

export default theme;
