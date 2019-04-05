import Reducer from "./reducer";
import { addComponent, deleteComponent } from "./actions";

describe("Reducer", () => {
    // Object.freeze to test immutability
  const filledInitialState = Object.freeze({
    components: [
      { id: 0, path: "myPath", name: "myName" },
      { id: 1, path: "myPath2", name: "myName2" }
    ]
  });
  const emptyInitialState = Object.freeze({ components: [] });

  it("when addComponent with undefined state", () => {
    const resultingState = Reducer(undefined, addComponent("myPath", "myName"));

    expect(resultingState).toEqual({
      components: [{ id: 0, path: "myPath", name: "myName" }]
    });
  });

  it("when addComponent with prefilled state", () => {
    const resultingState = Reducer(
      filledInitialState,
      addComponent("myPath", "myName")
    );

    expect(resultingState).toEqual({
      components: [
        { id: 0, path: "myPath", name: "myName" },
        { id: 1, path: "myPath2", name: "myName2" },
        { id: 2, path: "myPath", name: "myName" }
      ]
    });
  });

  it("when deleteComponent with undefined state", () => {
    const resultingState = Reducer(undefined, deleteComponent(20));

    expect(resultingState).toEqual({
      components: []
    });
  });

  it("when deleteComponent with invalid id and empty state", () => {
    const resultingState = Reducer(emptyInitialState, deleteComponent(20));

    expect(resultingState).toEqual({
      components: []
    });
  });

  it("when deleteComponent with invalid id and non empty state", () => {
    const resultingState = Reducer(filledInitialState, deleteComponent(20));

    expect(resultingState).toEqual(filledInitialState);
  });

  it("when deleteComponent with valid id", () => {
    const resultingState = Reducer(filledInitialState, deleteComponent(0));

    expect(resultingState).toEqual({
      components: [{ id: 1, path: "myPath2", name: "myName2" }]
    });
  });
});
