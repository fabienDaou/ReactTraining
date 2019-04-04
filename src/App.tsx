import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import Cat from "./components/Cat";
import Mouse from "./components/Mouse";
import ShowCaseApplication from "./components/ShowCaseApplication";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import { Provider as StoreProvider } from "react-redux";
import Store from "./state/store";

export default () => (
  <div className="App">
    <StoreProvider store={Store}>
      <AppRouter>
        <Switch>
          <Route path="/showcase" component={ShowCaseApplication} />
          <Route exact path="/login" component={Login} />
          <Redirect to="/login" />
        </Switch>
        <Mouse render={({ x, y }) => <Cat x={x} y={y} />} />
      </AppRouter>
    </StoreProvider>
  </div>
);
