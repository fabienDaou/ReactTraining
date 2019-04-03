import React, { FunctionComponent } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";

export interface SideMenuElementProps {
  name: string;
  id: number;
  onSelect(): void;
}

const SideMenuElement: FunctionComponent<SideMenuElementProps> = ({
  name,
  id,
  onSelect
}) => {
  return (
    <ListItem button key={id} onClick={onSelect}>
      <ListItemText primary={name} />
      <DeleteIcon />
    </ListItem>
  );
};

export default SideMenuElement;
