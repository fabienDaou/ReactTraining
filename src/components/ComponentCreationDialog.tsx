import React, { Component, ChangeEvent } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export interface ComponentCreationDialogProps {
  isOpened: boolean;
  onSubmit(path: string, name: string): void;
  onCancel(): void;
}

interface ComponentCreationDialogState {
  path: string;
  name: string;
  [x: string]: string;
}

class ComponentCreationDialog extends Component<
  ComponentCreationDialogProps,
  ComponentCreationDialogState
> {
  constructor(props: ComponentCreationDialogProps) {
    super(props);
    this.state = {
      path: "",
      name: ""
    };
  }

  handleCancel = () => {
    this.props.onCancel();
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.path, this.state.name);
  };

  handleChange = (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <div>
        <Dialog open={this.props.isOpened} aria-labelledby="form-dialog-title">
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
              onChange={this.handleChange("name")}
              fullWidth
            />
            <TextField
              margin="dense"
              id="path"
              name="path"
              label="Path"
              type="text"
              defaultValue=""
              onChange={this.handleChange("path")}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ComponentCreationDialog;
