import { AnyAction } from "redux";

export const ActionNames = {
  ADD_COMPONENT: "addComponent",
  DELETE_COMPONENT: "deleteComponent"
};

export const addComponent = (path: string, name: string) => {
  return {
    type: ActionNames.ADD_COMPONENT,
    payload: {
      path,
      name
    }
  };
};

export const deleteComponent = (id: number) => {
  return {
    type: ActionNames.DELETE_COMPONENT,
    payload: {
      id
    }
  };
};

export interface Action extends AnyAction {
  type: string;
  payload: any;
}
