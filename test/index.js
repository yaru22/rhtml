var assert = require('assert');
var rfile = require('rfile');
var rhtml = require('../');

describe('rhtml(file)', function () {
  it('returns the minified HTML for the file', function () {
    assert.equal(
      rhtml('./fixture/ultimate-seed-nav.html'),
      rfile('./fixture/ultimate-seed-nav.min.html')
    );
  });
});
