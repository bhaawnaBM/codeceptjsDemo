## PLAYWRIGHT with CODECEPTJS

### Setup

step 1. `cd e2e`

step 2. `npm install codeceptjs playwright@^0.12.1 --save` - to install CodeceptJS with Playwright packages

step 3. `npx codeceptjs init` - to inital all the dependencies


### Configuring

1.  Make sure Playwright helper is enabled in codecept.conf.js config:

  `helpers: {
    Playwright: {
      url: "http://localhost",
      show: true,
      browser: 'chromium',
      waitForNavigation: "networkidle0"
    }
  }`

2.  `npx codeceptjs gt` - to create a sample Test 

3. `npx codeceptjs run --steps`  - to Execute the test 

### BDD Implementation

-  To enable Gherkin for current project by running 
`gherkin:init`

- To an already initialized project:
  `npx codeceptjs gherkin:init`
  
  It will add gherkin section to the current config. It will also prepare directories for features and step definition. And it will create the first feature file for you

- To run only features use --features option:
  `npx codeceptjs run --features`

- To run only tests without features use --tests option:
 `npx codeceptjs run --tests`
