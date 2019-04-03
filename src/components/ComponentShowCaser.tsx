import React, { Component } from "react";

interface ComponentShowCaserProps {
  component: {
    name: string;
    path: string;
    id: number;
  };
}

class ComponentShowCaser extends Component<ComponentShowCaserProps, {}> {
  render() {
    const ShowCasedComponent = React.lazy(() =>
      import("./" + this.props.component.path)
    );

    return (
      <React.Suspense fallback="loading">
        <ShowCasedComponent />
      </React.Suspense>
    );
  }
}

export default ComponentShowCaser;
