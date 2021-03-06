# PLAYWRIGHT with CODECEPTJS

## Pre-requisite:

1. npm version 5.2 and above
2. *npx* comes bundled with npm version 5.2+.

## Getting Started - CodeceptJS  with Playwright Helper

1. Open a terminal and `cd` into the folder of the project where you would like your tests to reside.

2. To start we need CodeceptJS with Playwright packages installed. Run the command 

```
npm install codeceptjs playwright@^1 --save
```


## Configuration

1. You would see `codecept.conf.js` config file where you would see the following information that can be changes as per the requirement. 

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


## To Run the Tests

1. To run all tests

```
npx codeceptjs run
```

You can run the testing by including the following extra parameters

 ```
 --steps : This will execute all the tests and print-out the steps in the output
 --tests : This will execute all *.js test files without printing the steps in the output
 --<testfilename.js> : This will execute tests in <testfile.js>
 --features : This will execute all tests in the features folder without printing the steps in the output
 ``` 

Note: There many ways of running the tests. Please refer [here](https://docs.w3cub.com/codeceptjs/commands/) for more options


For more understanding on Why CodeceptJS with Playwright, please read my [blog](https://medium.com/@bhaawna1805/bc6770b78cff?source=friends_link&sk=a482c58557f46b07332fc5d51ff5c230)

And for more info on Codecept packages and documentation please refer [here](https://codecept.io/basics/)
