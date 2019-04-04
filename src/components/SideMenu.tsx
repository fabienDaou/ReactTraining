import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { Fab } from "@material-ui/core";
import { Link, Route } from "react-router-dom";
import SideMenuElement from "./SideMenuElement";
import { connect } from "react-redux";
import { ShowCasedComponent, ShowCaseApplicationState } from "../state/store";

interface SideMenuProps {
  componentList: ShowCasedComponent[];
  deleteComponent(id: number): void;
}

class SideMenu extends Component<SideMenuProps> {
  render() {
    return (
      <Drawer variant="permanent" anchor="left">
        <Route
          render={({ history }) => (
            <Fab
              variant="extended"
              color="primary"
              aria-label="Add"
              onClick={() => history.push("/showcase/add")}
            >
              Add
            </Fab>
          )}
        />
        <Divider />
        <List>
          {this.props.componentList.map(item => (
            <Link to={`/showcase/${item.name}`}>
              <SideMenuElement
                {...item}
                onDelete={() => this.props.deleteComponent(item.id)}
              />
            </Link>
          ))}
        </List>
      </Drawer>
    );
  }
}

const mapStateToProps = (state: ShowCaseApplicationState) => {
  return {
    componentList: state.componentList
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteComponent: (id: number) =>
      dispatch({ type: "deleteComponent", payload: { id: id } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
