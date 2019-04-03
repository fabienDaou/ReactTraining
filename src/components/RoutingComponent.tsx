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
    if (!comp) throw "error";

    return {
      name: comp.name,
      path: comp.path,
      id: comp.id
    };
  };

  return (
    <ComponentContext.Consumer>
      {({ componentList }) => (
        <ErrorBoundary>
          <ComponentShowCaser
            component={findComponentByName(componentList, name)}
          />
        </ErrorBoundary>
      )}
    </ComponentContext.Consumer>
  );
};

export default RoutingComponent;
