import { deleteComponent, addComponent } from "./actions";

describe("Action creator", () => {
  it("when addComponent called", () => {
    const name = "my name";
    const path = "my path";
    const sut = addComponent(path, name);
    expect(sut).toEqual({
      type: "addComponent",
      payload: { name, path }
    });
  });

  it("when deleteComponent called", () => {
    const id = 10;
    const sut = deleteComponent(id);
    expect(sut).toEqual({
      type: "deleteComponent",
      payload: { id }
    });
  });
});
