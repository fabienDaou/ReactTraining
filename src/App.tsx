import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import Cat from "./components/Cat";
import Mouse from "./components/Mouse";
import ShowCaseApplication from "./components/ShowCaseApplication";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";

export default () => (
  <AppRouter>
    <div className="App">
      <Switch>
        <Route path="/showcase" component={ShowCaseApplication} />
        <Route exact path="/login" component={Login} />
        <Redirect path="/" to="/login" />
      </Switch>
      <Mouse render={({ x, y }) => <Cat x={x} y={y} />} />
    </div>
  </AppRouter>
);
