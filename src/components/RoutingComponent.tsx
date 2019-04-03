import * as React from "react";
import ComponentContext, { ShowCasedComponent } from "../ComponentContext";
import ComponentShowCaser from "./ComponentShowCaser";
import { ErrorBoundary } from "./ErrorBoundary";

export interface RoutingComponentProps {
  name: string;
}

const RoutingComponent: React.FunctionComponent<RoutingComponentProps> = ({
  name
}) => {
  const findComponentByName = (
    components: ShowCasedComponent[],
    name: string
  ) => {
    const comp = components.find(component => component.name === name);
    if (!comp) {
      return {
        name: "",
        path: "Error",
        id: -1
      };
    }

    return { ...comp };
  };

  return (
    <ComponentContext.Consumer>
      {({ componentList }) => (
        <ErrorBoundary>
          <ComponentShowCaser {...findComponentByName(componentList, name)} />
        </ErrorBoundary>
      )}
    </ComponentContext.Consumer>
  );
};

export default RoutingComponent;
