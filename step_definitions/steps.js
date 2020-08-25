const { I } = inject();

// Add in your custom step files

Given("I navigate to github main page", () => {
  I.amOnPage("/");
  I.see("Built for developers", "h1"); //assertion
});

When("I search for my demo project", () => {
  I.fillField("Search GitHub", "codeceptjsDemo");
  I.pressKey("Enter");
});

Then("I should see the project displayed", () => {
  I.waitForText("repository results");
  I.see("bhaawnaBM/codeceptjsDemo");
});

Then("I navigate to the project repo page", () => {
  I.click("bhaawnaBM/codeceptjsDemo");
  I.see("PLAYWRIGHT with CODECEPTJS", "h2");
});
