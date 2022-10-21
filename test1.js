"use strict";

const { Locator, test, go, resize, click, l, type } = require("testim");

Locator.set(require("./locators/locators.js"));

test("untitled test", async () => {
  await go("https://www.google.com");
  await resize({ width: 1024, height: 680 });
  await click(l("q"));
  await type(l("q"), "calculadora");
  await click(l("calculadora"));
  await click(l("4"));
  await click(l("+"));
  await click(l("5"));
  await click(l("="));
});
