import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const AppRouter: React.FunctionComponent = props => {
  return <Router>{props.children}</Router>;
};

export default AppRouter;
