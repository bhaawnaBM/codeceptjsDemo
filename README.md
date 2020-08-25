## PLAYWRIGHT with CODECEPTJS

### Pre-requisites

- npm version 6


### Setup

- run `npm install codeceptjs playwright@^0.12.1 --save` - to install CodeceptJS with Playwright packages

- run `npx codeceptjs init` - to initalize all the dependencies

Running the above command produces *steps.d.ts* file, which is referenced in the very beginning of a test file. Is it a part of TypeScript definitions which allows IDEs to provide autocompletion when writing tests. *steps.d.ts* file allows IDE to provide autocompletion for *I* object inside Scenario and within blocks.

This file can be added to *gitignore* if not using typescript.

### Configuring

1. Make sure Playwright helper is enabled in codecept.conf.js config file:

 ```
 helpers: {
    
    Playwright: {
      
      url: "http://localhost",
      
      show: true,
      
      browser: 'chromium',
      
      waitForNavigation: "networkidle0"
    
    }
  
  }
  ```

2. Run the command `npx codeceptjs gt` to create a sample Test 
  

### Run Test

- Run `npx codeceptjs run --steps` - to execute the all tests

- Run all tests from current dir
  `codeceptjs run`

- Load config and run tests from *test* dir
  `codeceptjs run -c test`
   

### BDD Implementation

-  `npx codeceptjs gherkin:init` - enables Gherkin for current project/already initialized project:
  
  1. The above command will add gherkin section to the config. 
  2. It will also create directories for features and step definition. 
  3. It will also create a basic first feature file 


### Commands to the run the BDD Tests 

-  `npx codeceptjs run --features` - To run only features use

-  `npx codeceptjs run --tests` - To run only tests without features


### Why use npx instead of npm

- npm – Javascript package manager
- npx – Execute npm package binaries ( a tool for executing node packages )

*npx* comes bundled with npm version 5.2+.

*npx* is a npm package runner.
A major benefit of *npx* is that it will automatically install npm packages that aren’t already installed. *npx* is also very useful in cases where the package needs to be installed then configured before running. *npx* will check whether command exists in $PATH, or in the local project binaries, and execute it. If commands not found, it will be installed prior to execution.

For more understanding on Why CodeceptJS with Playwright, please read my blog on https://medium.com/@bhaawna1805/bc6770b78cff?source=friends_link&sk=a482c58557f46b07332fc5d51ff5c230
