import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import Cat from "./components/Cat";
import Mouse from "./components/Mouse";
import ShowCaseApplication from "./components/ShowCaseApplication";

export interface ShowCasedComponent {
  id: number;
  name: string;
  path: string;
}

export interface AppState {
  context: ComponentsRepository;
  dialogOpened: boolean;
}

interface ComponentsRepository {
  componentList: ShowCasedComponent[];
  selectedComponent: number;
}

class App extends React.Component<{}, AppState> {
  render() {
    return (
      <AppRouter>
        <div className="App">
          <ShowCaseApplication />
          <Mouse render={({ x, y }) => <Cat x={x} y={y} />} />
        </div>
      </AppRouter>
    );
  }
}

export default App;
