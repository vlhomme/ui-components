import React from "react";
import PropTypes from "prop-types";
import { /* useHistory, */ Link } from "react-router-dom";
import Ten from "./components/Icons/Ten";

const Home = (props) => {
  //   const history = useHistory();
  //   history.push("/register");
  return (
    <div>
      <Link to="/login">se connecter</Link>
      {/* <div style={{ width: "24px", height: "24px" }}> */}
      <Ten />
      {/* </div> */}
    </div>
  );
};

Home.propTypes = {
  default: PropTypes.string,
};

export default Home;
