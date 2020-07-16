Feature('login');

Scenario('testing the demo site', (I) => {

    I.amOnPage('/Login.html');
    I.fillField("UserName", "admin")
    I.fillField("Password", "password")
    I.click("//input[@type='submit']")
    I.waitForElement({xpath: "//input[@name='Initial']"})
    I.saveScreenshot("login.jpg")

});
