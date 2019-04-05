import { createStore } from "redux";
import { ShowCaseApplicationState } from "./model";
import Reducer from "./reducer";

const initialState: ShowCaseApplicationState = {
  components: [
    { id: 0, name: "test", path: "TaMere" },
    { id: 1, name: "test2", path: "TaMere" },
    { id: 2, name: "lonnnnnnnnnnnnnnng", path: "TaMere" },
    { id: 3, name: "pere", path: "TonPere" }
  ]
};

export default createStore(
  Reducer,
  initialState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
