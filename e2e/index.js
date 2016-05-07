'use strict';

var server = 'http://localhost:8080';

module.exports = {
  'App is working': function (test) {
    test
      .open(server)
      .assert.title().is('Bookrazy', 'It has title')
      .assert.visible('.five', 'Book list element is visible')
      .click('.dropdown')
      .assert.visible('.menu', 'Show filter dropdown')
      .click('#travels')
      .assert.val('#filtersInput', 'travels', 'Set value to input hidden')
      .assert.notVisible('#travels')
      .done();
  }
};
