import React from "react";
import { ShowCasedComponent } from "./App";

export interface ComponentContext {
  componentList: ShowCasedComponent[];
  selectedComponent: number;
  setSelectedComponent(id: number): void;
}

const ComponentContext = React.createContext<ComponentContext>({
  componentList: [],
  selectedComponent: 0,
  setSelectedComponent: (id: number) => {}
});

export default ComponentContext;
