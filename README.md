# PLAYWRIGHT with CODECEPTJS

## Pre-requisite:

1. npm version 5.2 and above
2. *npx* comes bundled with npm version 5.2+.

## Getting Started - CodeceptJS  with Playwright Helper

1. Open a terminal `cd` into the folder of the project where you would like your tests to reside.

2. To start we need CodeceptJS with Playwright packages installed. Run the command 

```
npm install codeceptjs playwright@^1 --save
```


## Configuration

1. Navigate to `codecept.conf.js` config file and ensure Playwright helper is enabled. 

 ```
 helpers: {
    
    Playwright: {
      
      url: "http://localhost",
      
      show: true,
      
      browser: 'chromium',
    
    }
  
  }
  ```

  Basic configurations in the helpder file include: 
- url - Base url of the website under test
- show - show browser window. Setting it to *true* runs test with head and setting it to *false* runs test in headless mode.
- browser - a browser to test on, either: chromium, firefox, webkit. Default: chromium.


## Create additional tests:

- Additional tests can be created by running the command 
```
npx codeceptjs gt
``` 
 
<img width="1342" alt="additions_tests" src="https://user-images.githubusercontent.com/62231865/91279267-9ce5c200-e7c8-11ea-95c8-a3f9084965a9.png">


## To Run the Tests

There are different ways to run the test. 

1. To executes all `*_test.js` test files without printing the steps in the output, run the command
```
npx codeceptjs run --tests
```
### or

2. If you wish to execute the all tests and print-out the steps in the output, then run the command
 ```
 npx codeceptjs run --steps
 ``` 
 
 <img width="551" alt="steps_output" src="https://user-images.githubusercontent.com/62231865/91279463-dd454000-e7c8-11ea-8d93-182add4f315d.png">
 

### or

  
3. To executes only the specified test, then run the command 
   ```
   npx codeceptjs run -- <testfilename.js>
   ```


## Commands to the run the BDD Tests 

1. To execute the all tests irrespective of features or *_test.js tests and prints out the steps in the output, then run the command
```
npx codeceptjs run --steps
```
<img width="1473" alt="BDD_run_steps" src="https://user-images.githubusercontent.com/62231865/91280211-cd7a2b80-e7c9-11ea-8255-4f5f2b27714b.png">

### or 

2. To run all tests without printing the steps, then run the command
```
npx codeceptjs run
```
<img width="475" alt="run_witout_steps" src="https://user-images.githubusercontent.com/62231865/91279545-fa7a0e80-e7c8-11ea-83ef-f320efda8e94.png">


### or

3. To execute all tests in the features folder without printing the steps in the output, then run the command

````
npx codeceptjs run --features
````

<img width="550" alt="run_features" src="https://user-images.githubusercontent.com/62231865/91280337-f26e9e80-e7c9-11ea-84e3-6461924f8695.png">


## Included a small note on Why use npx instead of npm

- npm – Javascript package manager
- npx – Execute npm package binaries ( a tool for executing node packages )

*npx* comes bundled with npm version 5.2+.

*npx* is a npm package runner.
A major benefit of *npx* is that it will automatically install npm packages that aren’t already installed. *npx* is also very useful in cases where the package needs to be installed then configured before running. *npx* will check whether command exists in $PATH, or in the local project binaries, and execute it. If commands not found, it will be installed prior to execution.

For more understanding on Why CodeceptJS with Playwright, please read my [blog](https://medium.com/@bhaawna1805/bc6770b78cff?source=friends_link&sk=a482c58557f46b07332fc5d51ff5c230)
