import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import Fab from "@material-ui/core/Fab";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ComponentContext from "../ComponentContext";
import { Link } from "react-router-dom";
import AddComponentButton from "./AddComponentButton";

interface iSideMenuProps {
  onAdd: () => void;
}

class SideMenu extends Component<iSideMenuProps, {}> {
  render() {
    return (
      <ComponentContext.Consumer>
        {({ componentList, setSelectedComponent }) => (
          <Drawer variant="permanent" anchor="left">
            <AddComponentButton />
            <Divider />
            <List>
              {componentList.map(item => (
                <Link to={`/showcase/${item.name}`}>
                  <ListItem
                    button
                    key={item.id}
                    onClick={() => setSelectedComponent(item.id)}
                  >
                    <ListItemText primary={item.name} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Drawer>
        )}
      </ComponentContext.Consumer>
    );
  }
}

export default SideMenu;
