import React from "react";
import { Fab } from "@material-ui/core";
import { Route } from "react-router-dom";

export default () => (
  <Route
    render={({ history }) => (
      <Fab
        color="primary"
        aria-label="Add"
        onClick={() => history.push("/add")}
      >
        +
      </Fab>
    )}
  />
);
