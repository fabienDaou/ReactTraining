import * as React from "react";

export interface MouseProps {
  render(props: { x: number; y: number }): React.ReactNode;
}

const Mouse: React.FunctionComponent<MouseProps> = ({ render }) => {
  const [x, setX] = React.useState();
  const [y, setY] = React.useState();

  const handleMouseMove = (event: { clientX: any; clientY: any }) => {
    setX(event.clientX - 20);
    setY(event.clientY - 20);
  };

  return <div onMouseMove={handleMouseMove}>{render({ x, y })}</div>;
};

export default Mouse;
