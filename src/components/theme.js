import { createMuiTheme } from "@material-ui/core/styles";
import amber from "@material-ui/core/colors/amber";
import purple from "@material-ui/core/colors/purple";
// import lime from "@material-ui/core/colors/lime";
// import yellow from "@material-ui/core/colors/yellow";

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: purple,
  },
  status: {
    danger: "red",
  },
});

export default theme;
