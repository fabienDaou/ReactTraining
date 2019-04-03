import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RoutingComponent from "./components/RoutingComponent";

const AppRouter: React.FunctionComponent = (props) => {
  return (
    <Router>
      <div>
        <Route
          path="/showcase/:name"
          render={({ match }) => <RoutingComponent name={match.params.name} />}
        />
        {props.children}
      </div>
    </Router>
  );
};

export default AppRouter;
