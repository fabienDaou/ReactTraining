import { createStore, Reducer, AnyAction } from "redux";
import { ActionNames } from "./actions";

export interface Action extends AnyAction {
  type: string;
  payload: any;
}

export interface ShowCaseApplicationState {
  components: ShowCasedComponent[];
}

export interface ShowCasedComponent {
  id: number;
  name: string;
  path: string;
}

const initialState: ShowCaseApplicationState = {
  components: [
    { id: 0, name: "test", path: "TaMere" },
    { id: 1, name: "test2", path: "TaMere" },
    { id: 2, name: "lonnnnnnnnnnnnnnng", path: "TaMere" },
    { id: 3, name: "pere", path: "TonPere" }
  ]
};

const reducer: Reducer<ShowCaseApplicationState | undefined, Action> = (
  state: ShowCaseApplicationState | undefined,
  action: Action
) => {
  if (!state) return;
  switch (action.type) {
    case ActionNames.ADD_COMPONENT:
      const newComponent: ShowCasedComponent = {
        id: state.components.length,
        ...action.payload
      };
      return {
        components: [...state.components, newComponent]
      };
    case ActionNames.DELETE_COMPONENT:
      return {
        components: state.components.filter(
          component => component.id !== action.payload.id
        ),
        selectedComponent: 0
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
