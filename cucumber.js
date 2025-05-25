module.exports = {
  default: {
    require: [
      '/Users/Playwright_Project-main/tests/download-uploadfile.spec.js',
      'support/*.js'
    ],
    format: ['progress'],
    paths: ['features/*.feature'],
    publishQuiet: true
  }
};
