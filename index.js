'use strict';

const webdriverio = require('webdriverio');

const options = {
  desiredCapabilities: {
    browserName: 'firefox'
  }
};

const client = webdriverio.remote(options);

client
  .init()
  .url('http://www.google.com')
  .title().then(function (title) {
    console.log(`Title was: ${title.value}`);
  })
  .end();
