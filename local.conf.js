exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
  
    updateJob: false,
    specs: [
      './test/specs/**/*.js'
    ],
    exclude: [],
  
    capabilities: [{
      project: "Local Appium",
      build: 'Local Builds',
      name: 'device_update_local',
      device: 'Google Pixel 5',
      os_version: "11.0",
      app: process.env.BROWSERSTACK_APP_ID || 'bs://88e6d817b662a26ea76fc4dbfa41bf6a23193ba9',
      'browserstack.debug': true
    }],
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000
    }
  };