const ASYNC_TIMEOUT_MS = 15000;

jest.setTimeout(ASYNC_TIMEOUT_MS);

describe("app", () => {
  const URL = "http://localhost:3000/login";
  beforeEach(async () => {
    await page.goto(URL);
  });

  it("should display a react logo", async () => {
    await page.waitForXPath("//*[@id='root']/div/a");
    expect(page.$("//*[@id='mycat']")).toBeTruthy();
  });
});
