import React, { FunctionComponent } from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { Fab } from "@material-ui/core";
import { Link, Route } from "react-router-dom";
import SideMenuElement from "./SideMenuElement";
import { connect } from "react-redux";
import { ShowCasedComponent, ShowCaseApplicationState } from "../state/store";
import { deleteComponent } from "../state/actions";

interface SideMenuProps {
  components: ShowCasedComponent[];
  deleteComponent(id: number): void;
}

const SideMenu: FunctionComponent<SideMenuProps> = ({
  components,
  deleteComponent
}) => {
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
        {components.map(item => (
          <Link to={`/showcase/${item.name}`}>
            <SideMenuElement
              {...item}
              onDelete={() => deleteComponent(item.id)}
            />
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

const mapStateToProps = (state: ShowCaseApplicationState) => {
  return {
    components: state.components
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteComponent: (id: number) => dispatch(deleteComponent(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
