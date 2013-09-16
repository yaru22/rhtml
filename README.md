# rhtml

[![Build Status](https://secure.travis-ci.org/yaru22/rhtml.png)](http://travis-ci.org/yaru22/rhtml)
[![Dependency Status](https://gemnasium.com/yaru22/rhtml.png)](https://gemnasium.com/yaru22/rhtml)

"Require" minified HTML as a string

## Installation

```
npm install rhtml
```

## Usage

```javascript
var rhtml = require('rhtml');
var minHTML = rhtml('./somepage.html');
console.log(minHTML);
```

Uses the same resolution algorithm as require for maximum simplicity.  Built on top of [rfile](https://github.com/ForbesLindesay/rfile) and [html-minifier](https://github.com/kangax/html-minifier).

## License

  MIT
