import * as React from "react";
import { ShowCasedComponent, ShowCaseApplicationState } from "../state/store";
import ComponentShowCaser from "./ComponentShowCaser";
import { ErrorBoundary } from "./ErrorBoundary";
import { connect } from "react-redux";

export interface RoutingComponentProps {
  components: ShowCasedComponent[];
  name: string;
}

const RoutingComponent: React.FunctionComponent<RoutingComponentProps> = ({
  components,
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
    <ErrorBoundary>
      <ComponentShowCaser {...findComponentByName(components, name)} />
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: ShowCaseApplicationState) => {
  return {
    components: state.componentList
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoutingComponent);
