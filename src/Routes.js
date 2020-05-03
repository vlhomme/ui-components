import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import "./App.css";

function Routes() {
  const history = useHistory();
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route
          path="/login"
          render={(props) => (
            <Login {...props} goToRegister={() => history.push("/register")} />
          )}
        />
        <Route
          path="/register"
          render={(props) => (
            <Register {...props} goToLogin={() => history.push("/login")} />
          )}
        />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default Routes;
