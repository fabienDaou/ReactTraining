import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { Fab } from "@material-ui/core";
import ComponentContext from "../ComponentContext";
import { Link, Route } from "react-router-dom";
import SideMenuElement from "./SideMenuElement";

class SideMenu extends Component {
  render() {
    return (
      <ComponentContext.Consumer>
        {({ componentList, deleteComponent }) => (
          <Drawer variant="permanent" anchor="left">
            <Route
              render={({ history }) => (
                <Fab
                  variant="extended"
                  color="primary"
                  aria-label="Add"
                  onClick={() => history.push("/add")}
                >
                  Add
                </Fab>
              )}
            />
            <Divider />
            <List>
              {componentList.map(item => (
                <Link to={`/showcase/${item.name}`}>
                  <SideMenuElement
                    {...item}
                    onDelete={() => deleteComponent(item.id)}
                  />
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
