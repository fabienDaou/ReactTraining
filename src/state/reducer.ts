import { ShowCaseApplicationState, ShowCasedComponent } from "./model";
import { Reducer } from "redux";
import { ActionNames, Action } from "./actions";

const defaultState: ShowCaseApplicationState = { components: [] };

const reducer: Reducer<ShowCaseApplicationState | undefined, Action> = (
  state: ShowCaseApplicationState | undefined = defaultState,
  action: Action
) => {
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
        )
      };
  }
  return state;
};

export default reducer;
