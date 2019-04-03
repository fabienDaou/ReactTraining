import React from "react";

export interface ComponentContext {
  componentList: ShowCasedComponent[];
  selectedComponent: number;
  setSelectedComponent(id: number): void;
}

export interface ShowCasedComponent {
  id: number;
  name: string;
  path: string;
}

const ComponentContext = React.createContext<ComponentContext>({
  componentList: [],
  selectedComponent: 0,
  setSelectedComponent: (id: number) => {}
});

export default ComponentContext;
