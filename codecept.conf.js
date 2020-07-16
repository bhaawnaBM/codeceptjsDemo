exports.config = {
  output: "./output",
  helpers: {
    Playwright: {
      url: "http://executeautomation.com/demosite",
      show: true,
      browser: "chromium",
      waitForAction: 500
    },
  },
  include: {
    I: "./steps_file.js",
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: "./features/*.feature",
    steps: ["./step_definitions/steps.js"],
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
    },
  },
  tests: "./*_test.js",
  name: "codeceptjs",
  // multiple: {
  //   smoke: {
  //     // run only tests containing "@smoke" in name (codeceptjs run-multiple --all, codeceptjs run-multiple basic:chrome smoke:firefox)
  //     //https://codecept.io/parallel/#multiple-browsers-execution
  //     grep: "@smoke",

  //     // store results into `output/smoke` directory
  //     outputName: "smoke",

  //     basic: {
  //       // run all tests in chrome and firefox
  //       browsers: ["chrome", "firefox"],
  //     },

  //     smoke: {
  //       browsers: [
  //         chrome,
  //         // replace any config values from WebDriver helper
  //         {
  //           browser: "chrome",
  //           windowSize: "maximize",
  //           desiredCapabilities: {
  //             acceptSslCerts: true,
  //           },
  //         },
  //       ],
  //     },
  //   },
  // },
};
