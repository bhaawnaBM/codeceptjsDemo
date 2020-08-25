Feature('login to github and lookup for the project')

Scenario('find my project on github', I => {
	I.amOnPage('/')
	I.see('Built for developers', 'h1') //assertion
	I.fillField('Search GitHub', 'codeceptjsDemo')
	I.pressKey('Enter')
	I.waitForText('repository results')
	I.click('bhaawnaBM/codeceptjsDemo')
	I.see('PLAYWRIGHT with CODECEPTJS', 'h2')
})
