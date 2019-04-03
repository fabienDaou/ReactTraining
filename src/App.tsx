import React, { Component } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu";
import ComponentCreationDialog from "./components/ComponentCreationDialog";
import ComponentShowCaser from "./components/ComponentShowCaser";
import ComponentContext from "./ComponentContext";
import AppRouter from "./AppRouter";

export interface iComponent {
  id: number;
  name: string;
  path: string;
}

export interface iAppState {
  context: ComponentsRepository;
  dialogOpened: boolean;
}

interface ComponentsRepository {
  componentList: iComponent[];
  selectedComponent: number;
}

class App extends Component<{}, iAppState> {
  state = {
    context: {
      componentList: [
        { id: 0, name: "test", path: "TaMere" },
        { id: 1, name: "test2", path: "TaMere" },
        { id: 2, name: "lonnnnnnnnnnnnnnng", path: "TaMere" },
        { id: 3, name: "pere", path: "TonPere" }
      ],
      selectedComponent: 0
    },
    dialogOpened: false
  };

  setSelectedComponent = (id: number) => {
    this.setState({
      ...this.state,
      context: {
        componentList: [...this.state.context.componentList],
        selectedComponent: id
      }
    });
  };

  openDialog = () => {
    let newState = { ...this.state };
    newState.dialogOpened = true;
    this.setState(newState);
  };

  cancelDialog = () => {
    this.setState({ ...this.state, dialogOpened: false });
  };

  submitDialog = (path: string, name: string) => {
    const components = this.state.context.componentList.concat({
      id: this.state.context.componentList.length,
      path: path,
      name: name
    });
    this.setState({
      ...this.state,
      context: {
        componentList: components,
        selectedComponent: this.state.context.selectedComponent
      },
      dialogOpened: false
    });
  };

  render() {
    return (
      <div className="App">
        <ComponentContext.Provider
          value={{
            ...this.state.context,
            setSelectedComponent: this.setSelectedComponent
          }}
        >
          <AppRouter>
            <SideMenu onAdd={this.openDialog} />
            <ComponentCreationDialog
              isOpened={this.state.dialogOpened}
              onCancel={this.cancelDialog}
              onSubmit={this.submitDialog}
            />
          </AppRouter>
        </ComponentContext.Provider>
      </div>
    );
  }
}

export default App;
