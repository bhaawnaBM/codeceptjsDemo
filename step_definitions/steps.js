const { I } = inject();

// Add in your custom step files

Given('I navigate to the application', () => {
  I.amOnPage("/Login.html");
});

When('I login with username and password', (table,) => {
  const cells = table.rows[1].cells;
  I.fillField("UserName", cells[0].value);
  I.fillField("Password", cells[1].value);
});

Then('I submit my credentials', () => {
  I.click("//input[@type='submit']");
});

Then('I should see loggedIn', () => {
  I.waitForElement({ xpath: "//input[@name='Initial']" });
  I.saveScreenshot("login.jpg");
});
