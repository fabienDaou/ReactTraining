import React from "react";
import { iComponent } from "./App";

export interface ComponentContext {
  componentList: iComponent[];
  selectedComponent: number;
  setSelectedComponent(id: number): void;
}

const ComponentContext = React.createContext<ComponentContext>({
  componentList: [],
  selectedComponent: 0,
  setSelectedComponent: (id: number) => {}
});

export default ComponentContext;
