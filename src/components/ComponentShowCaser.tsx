import React, { Component } from "react";
import { ShowCasedComponent } from "../ComponentContext";

class ComponentShowCaser extends Component<ShowCasedComponent, {}> {
  render() {
    const ShowCasedComponent = React.lazy(() =>
      import("./" + this.props.path)
    );

    return (
      <React.Suspense fallback="loading">
        <ShowCasedComponent />
      </React.Suspense>
    );
  }
}

export default ComponentShowCaser;
