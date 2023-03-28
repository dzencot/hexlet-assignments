/* eslint-disable  no-undef */

const port = 5000;
const host = 'localhost';
const appUrl = `http://${host}:${port}`;

// BEGIN
const appArticlesUrl = `${appUrl}/articles`;

describe("SimpleBlog", () => {
  it("open main page", async () => {
    await page.goto(appUrl);
  });
});
// END
