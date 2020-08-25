exports.config = {
  output: "./output",
  helpers: {
    Playwright: {
      url: 'https://github.com',
      show: true,
      browser: "chromium",
      waitForAction: 500
    },
  },
  include: {
    //I: "./steps_file.js",
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
  name: "codeceptjsDemo",
};
