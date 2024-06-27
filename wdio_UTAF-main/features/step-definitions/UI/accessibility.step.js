const { Given, When, Then } = require("@wdio/cucumber-framework");
const assert = require("assert");
const runAccessibilityTests = require("../../../Utils/a11y");
require("dotenv").config();

Given(/^I am on the homepage$/, async () => {
  await browser.maximizeWindow();
  await browser.url('https://www.saucedemo.com/v1');
});

When(/^I run the accessibility tests$/, async function () {
  this.ally_results = await runAccessibilityTests();
});

Then(/^There should be no accessibility violations$/, function () {
  assert.strictEqual(
    this.ally_results.violations.length,
    0,
    "Expected no a11y violations"
  );
});

