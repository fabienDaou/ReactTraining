import React from "react";
import SideMenu from "./SideMenu";
import ComponentCreationDialog from "./ComponentCreationDialog";
import { Route } from "react-router-dom";
import RoutingComponent from "./RoutingComponent";
import ComponentContext from "../ComponentContext";

export default () => {
  const [dialogOpened, setDialogOpened] = React.useState(false);
  const [context, setContext] = React.useState({
    componentList: [
      { id: 0, name: "test", path: "TaMere" },
      { id: 1, name: "test2", path: "TaMere" },
      { id: 2, name: "lonnnnnnnnnnnnnnng", path: "TaMere" },
      { id: 3, name: "pere", path: "TonPere" }
    ],
    selectedComponent: 0
  });

  const openDialog = () => setDialogOpened(true);
  const cancelDialog = () => setDialogOpened(false);
  const submitDialog = (path: string, name: string) => {
    const components = context.componentList.concat({
      id: context.componentList.length,
      path: path,
      name: name
    });
    setContext({
      ...context,
      componentList: components
    });
    setDialogOpened(false);
  };

  const setSelectedComponent = (id: number) =>
    setContext({
      componentList: [...context.componentList],
      selectedComponent: id
    });
  return (
    <ComponentContext.Provider
      value={{
        ...context,
        setSelectedComponent: setSelectedComponent
      }}
    >
      <SideMenu onAdd={openDialog} />
      <ComponentCreationDialog
        isOpened={dialogOpened}
        onCancel={cancelDialog}
        onSubmit={submitDialog}
      />

      <Route
        path="/showcase/:name"
        render={({ match }) => <RoutingComponent name={match.params.name} />}
      />
    </ComponentContext.Provider>
  );
};
