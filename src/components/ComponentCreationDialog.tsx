import React, { ChangeEvent, FunctionComponent } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ShowCaseApplicationState } from "../state/store";
import { connect } from "react-redux";

export interface ComponentCreationDialogProps {
  isOpened: boolean;
  onSubmit(path: string, name: string): void;
  onCancel(): void;
}

const ComponentCreationDialog: FunctionComponent<
  ComponentCreationDialogProps
> = ({ isOpened, onSubmit, onCancel }) => {
  const [path, setPath] = React.useState("");
  const [name, setName] = React.useState("");

  const handleCancel = () => onCancel();

  const handleSubmit = () => onSubmit(path, name);

  const handlePathChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPath(event.target.value);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  return (
    <div>
      <Dialog open={isOpened} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Choose a component to showcase
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            defaultValue=""
            onChange={handleNameChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="path"
            name="path"
            label="Path"
            type="text"
            defaultValue=""
            onChange={handlePathChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

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
)(ComponentCreationDialog);
