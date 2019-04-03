import React, { FunctionComponent } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { ListItemSecondaryAction, IconButton } from "@material-ui/core";

export interface SideMenuElementProps {
  name: string;
  id: number;
  onDelete(): void;
}

const SideMenuElement: FunctionComponent<SideMenuElementProps> = ({
  name,
  id,
  onDelete
}) => {
  return (
    <ListItem button key={id}>
      <ListItemText primary={name} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default SideMenuElement;
