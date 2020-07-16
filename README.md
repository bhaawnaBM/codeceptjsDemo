## PLAYWRIGHT with CODECEPTJS

### Setup

- To start you need CodeceptJS with Playwright packages installed
  `npm install codeceptjs playwright@^0.12.1 --save`

- Run the below command to inital all the dependencies
  `npx codeceptjs init`


### Configuring
 
- Playwright uses different strategies to detect if a page is loaded. In configuration use waitForNavigation option for that:

- When to consider navigation succeeded, defaults to load. Given an array of event strings, navigation is considered to be successful after all events have been fired. Events can be either:

    load - consider navigation to be finished when the load event is fired.
    domcontentloaded - consider navigation to be finished when the DOMContentLoaded event is fired.
    networkidle0 - consider navigation to be finished when there are no more than 0 network connections for at least 500 ms.
    networkidle2 - consider navigation to be finished when there are no more than 2 network connections for at least 500 ms.

- Make sure Playwright helper is enabled in codecept.conf.js config:

  helpers: {
    Playwright: {
      url: "http://localhost",
      show: true,
      browser: 'chromium',
      waitForNavigation: "networkidle0"
    }
  }

- Running the below command will create a sample Test 
  `npx codeceptjs gt`

- To execute the test run the command 
   `npx codeceptjs run --steps`

### BDD Implementation

-  We can enable Gherkin for current project by running gherkin:init command on already initialized project:
  `npx codeceptjs gherkin:init`
  It will add gherkin section to the current config. It will also prepare directories for features and step definition. And it will create the first feature file for you

- To run only features use --features option:
  `npx codeceptjs run --features`

- To run only tests without features use --tests option:
 `npx codeceptjs run --tests`



