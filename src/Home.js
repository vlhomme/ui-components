import React from "react";
import PropTypes from "prop-types";
import { /* useHistory, */ Link } from "react-router-dom";

const Home = (props) => {
  //   const history = useHistory();
  //   history.push("/register");
  return (
    <div>
      <Link to="/login">se connecter</Link>
    </div>
  );
};

Home.propTypes = {
  default: PropTypes.string,
};

export default Home;
