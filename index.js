var minify = require('./node_modules/html-minifier/src/htmlminifier').minify;
var rfile = require('rfile');

module.exports = function (path, rfileOptions, rhtmlOptions) {
  rhtmlOptions = rhtmlOptions || {
    removeComments: true,
    collapseWhitespace: true
  };
  rfileOptions = rfileOptions || {};
  rfileOptions.exclude = [__filename];
  return minify(rfile(path, rfileOptions), rhtmlOptions);
};
