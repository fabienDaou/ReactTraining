import React, { FunctionComponent } from "react";
import { ShowCasedComponent } from "../ComponentContext";

const ComponentShowCaser: FunctionComponent<ShowCasedComponent> = ({
  path
}) => {
  const ShowCasedComponent = React.lazy(() => import("./" + path));
  return (
    <React.Suspense fallback="loading">
      <ShowCasedComponent />
    </React.Suspense>
  );
};

export default ComponentShowCaser;
