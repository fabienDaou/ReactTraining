import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import Cat from "./components/Cat";
import Mouse from "./components/Mouse";
import ShowCaseApplication from "./components/ShowCaseApplication";

export default () => (
  <AppRouter>
    <div className="App">
      <ShowCaseApplication />
      <Mouse render={({ x, y }) => <Cat x={x} y={y} />} />
    </div>
  </AppRouter>
);
