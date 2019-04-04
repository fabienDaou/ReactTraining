import { createStore, Reducer, AnyAction } from "redux";

export interface Action extends AnyAction {
  type: string;
  payload: any;
}

export interface ShowCaseApplicationState {
  componentList: ShowCasedComponent[];
  selectedComponent: number;
}

export interface ShowCasedComponent {
  id: number;
  name: string;
  path: string;
}

const initialState: ShowCaseApplicationState = {
  componentList: [
    { id: 0, name: "test", path: "TaMere" },
    { id: 1, name: "test2", path: "TaMere" },
    { id: 2, name: "lonnnnnnnnnnnnnnng", path: "TaMere" },
    { id: 3, name: "pere", path: "TonPere" }
  ],
  selectedComponent: 0
};

const reducer: Reducer<ShowCaseApplicationState | undefined, Action> = (
  state: ShowCaseApplicationState | undefined,
  action: Action
) => {
  if (!state) return;
  switch (action.type) {
    case "addComponent":
      const newComponent: ShowCasedComponent = {
        id: state.componentList.length,
        ...action.payload
      };
      return {
        componentList: [...state.componentList, newComponent],
        selectedComponent: state.selectedComponent
      };
    case "deleteComponent":
      return {
        componentList: state.componentList.filter(
          component => component.id !== action.payload.id
        ),
        selectedComponent: 0
      };
    case "selectComponent":
      return {
        componentList: [...state.componentList],
        selectedComponent: action.payload.id
      };
  }
  return state;
};

export default createStore(
  reducer,
  initialState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
