# PLAYWRIGHT with CODECEPTJS

## Pre-requisite:

1. npm version 5.2 and above
2. *npx* comes bundled with npm version 5.2+.
3. VSCode IDE

## Getting Started with a CodeceptJS with Playwright Helper

1. Open a terminal in the IDE and `cd` into the folder of the project where you would like your tests to reside.

2. To start we need CodeceptJS with Playwright packages installed. Run the command 

```
npm install codeceptjs playwright@^1 --save
```

3. And then run the below command to initialize a basic project:

```
npx codeceptjs init
```

  When we run the above code we will be prompted with below questions:

- <b>? Where are your tests located? </b>`./*_test.js` (*you can give a path of your choice or click enter to consider the default suggested path*) <br>
- <b>? What helpers do you want to use? </b> (choose `playwirght` for Helper) <br>
- <b>? Where should logs, screenshots, and reports to be stored? </b> `./output`(*you can give a path of your choice or click enter to consider the default suggested path*)<br>
- <b>? Do you want localization for tests? </b> (*Select English*) <br>
- <b>? [Playwright] Base url of site to be tested </b> - `(Provide the Base url of a website you are testing)` <br>
- <b>? [Playwright] Show browser window `Yes` </b> - (*Select Yes or No depending upon which mode you would like to run your tests- headless or with head*) <br>
- <b>? [Playwright] Browser in which testing will be performed. Possible options: chromium, firefox or webkit chromium </b> - (*Choose the browser on which you would like to run the tests against*) <br>



The required files are created in respective folders as entered. 

- Steps file will be created at `./steps_file.js` <br>
- Config file with be created at /Users/<username>/test/codeceptDemo1/codecept.conf.js <br>
- Directory for temporary output files will be created at './output' <br>
- Intellisense will be enabled in /Users/<username>/test/codeceptDemo1/jsconfig.json <br>
- TypeScript Definitions that provides autocompletion in Visual Studio Code and other IDEs will be generated in steps.d.ts <br>

We are then prompted with few more questions:

- <b>? Feature which is being tested (ex: account, login, etc) </b> - Enter the name example: login <br>
- <b>? Filename of a test </b> - Click `Enter` to create the test file. <br>

Please Note: You can choose to add *steps.d.ts* file to *gitignore* if not using Typescript.

A basic project structure will now be created.

![basicProjectStructure.png]

## Configuring

1. Navigate to codecept.conf.js config file and  ensure Playwright helper is enabled. 

 ```
 helpers: {
    
    Playwright: {
      
      url: "http://localhost",
      
      show: true,
      
      browser: 'chromium',
    
    }
  
  }
  ```

  Basic configurations in the helpder file stands for: 
- url - Base url of the website under test
- show - show browser window. Setting it to *true* runs test with head and setting it to *false* runs test in headless mode.
- browser - a browser to test on, either: chromium, firefox, webkit. Default: chromium.


## Create additional tests:

- Additional tests can be created by running the command 
```
npx codeceptjs gt
``` 
  

## To Run the Tests

There are different ways to run the test. 

1. To executes all `*_test.js` test files without printing the steps in the output, run the command
```
npx codeceptjs run --tests
```
or

2. If you wish to execute the all tests and prints-out the steps in the output, then run the command
 ```
 npx codeceptjs run --steps
 ``` 

or

  
3. To executes only the specified test, then run the command 
   ```
   npx codeceptjs run -- <testfilename.js>
   ```


## If you wish to implement BDD in your project then follow the below additional steps

1. To enables Gherkin for current/already initialized project just run the command- 
```
npx codeceptjs gherkin:init
``` 
Running the above command will do the following to the project structure:

    1. Adds gherkin section to the config file - *codecept.config.js*. 
    2. Also creates directories for features and step definition. 
    3. It will also create a basic first feature file     


## Commands to the run the BDD Tests 

1. To execute the all tests irrespective of features or *_test.js tests and prints out the steps in the output, then run the command
```
npx codeceptjs run --steps
```
or 

2. To run all tests without printing the steps, then run the command
```
npx codeceptjs run
```
*or*

3. To execute all tests in the features folder without printing the steps in the output, then run the command

````
npx codeceptjs run --features
````

### Included a small note on Why use npx instead of npm

- npm – Javascript package manager
- npx – Execute npm package binaries ( a tool for executing node packages )

*npx* comes bundled with npm version 5.2+.

*npx* is a npm package runner.
A major benefit of *npx* is that it will automatically install npm packages that aren’t already installed. *npx* is also very useful in cases where the package needs to be installed then configured before running. *npx* will check whether command exists in $PATH, or in the local project binaries, and execute it. If commands not found, it will be installed prior to execution.

For more understanding on Why CodeceptJS with Playwright, please read my [blog](https://medium.com/@bhaawna1805/bc6770b78cff?source=friends_link&sk=a482c58557f46b07332fc5d51ff5c230)
