import * as React from "react";

export interface CatProps {
  x: number;
  y: number;
}

const Cat: React.FunctionComponent<CatProps> = ({ x, y }) => (
  <img
    src={"https://image.flaticon.com/icons/svg/23/23401.svg"}
    height={42}
    width={42}
    style={{ position: "absolute", left: x + "px", top: y + "px", zIndex: -1 }}
  />
);

export default Cat;
