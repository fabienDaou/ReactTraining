import React from "react";

export interface ComponentContext {
  componentList: ShowCasedComponent[];
  selectedComponent: number;
  deleteComponent(id: number): void;
}

export interface ShowCasedComponent {
  id: number;
  name: string;
  path: string;
}

const ComponentContext = React.createContext<ComponentContext>({
  componentList: [],
  selectedComponent: 0,
  deleteComponent: (id: number) => {}
});

export default ComponentContext;
