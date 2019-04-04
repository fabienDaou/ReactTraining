import React, { FunctionComponent } from "react";
import SideMenu from "./SideMenu";
import ComponentCreationDialog from "./ComponentCreationDialog";
import { Route, Switch, RouteComponentProps } from "react-router-dom";
import RoutingComponent from "./RoutingComponent";
import { connect } from "react-redux";
import { ShowCaseApplicationState } from "../state/store";

interface ShowCaseApplicationProps extends RouteComponentProps {
  onAdd(path: string, name: string): void;
}

const ShowCaseApplication: FunctionComponent<ShowCaseApplicationProps> = ({
  onAdd,
  match
}) => {
  const [dialogOpened, setDialogOpened] = React.useState(false);

  const cancelDialog = () => setDialogOpened(false);
  const submitDialog = (path: string, name: string) => {
    onAdd(path, name);
    setDialogOpened(false);
  };

  return (
    <>
      <SideMenu />
      <Switch>
        <Route
          path={`${match.path}/add`}
          exact
          render={({ history }) => {
            setDialogOpened(true);
            return (
              <ComponentCreationDialog
                isOpened={dialogOpened}
                onCancel={() => {
                  history.push("/showcase");
                  cancelDialog();
                }}
                onSubmit={(path, name) => {
                  history.push("/showcase");
                  submitDialog(path, name);
                }}
              />
            );
          }}
        />
        <Route
          path="/showcase/:name"
          render={({ match }) => <RoutingComponent name={match.params.name} />}
        />
      </Switch>
    </>
  );
};

const mapStateToProps = (state: ShowCaseApplicationState) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAdd: (path: string, name: string) =>
      dispatch({ type: "addComponent", payload: { path, name } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowCaseApplication);
