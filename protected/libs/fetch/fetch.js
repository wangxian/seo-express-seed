// Usage: phantomjs fetch.js http://localhost:18080/

var system = require('system');
var page = require('webpage').create();

var url = system.args[1];

// on error
// phantom.onError = function(msg, trace) {}
// page.onError = function(msg, trace) {}

// Abort css & img
page.onResourceRequested = function(requestData, request) {
  if ( (/\.css|\.png|\.jpg|\.gif/gi).test(requestData['url']) ) {
    // console.log('The url of the request is matching. Aborting: ' + requestData['url']);
    request.abort();
  }
};

page.open(url, function(status) {
  if (status !== 'success') { console.log('Unable to access network'); }
  else {
    var count = 0;
    setTimeout(function fetch(){
      // console.log(count);
      var ready = page.evaluate(function () {
        return !!window.APPLoaded;
      });

      // 最长实行时间，20次，1s
      if (++count > 20 || ready) {
        var out = page.content;
        out = out.replace(/<script[^>]+>(.|\n|\r)*?<\/script\s*>/ig, '');
        out = out.replace(/#!/g, "");
        // out = out.replace(/\n\n/g, "")
        console.log(out);
        phantom.exit();
      }

      timer = setTimeout(fetch, 50);
    }, 50);
  }
});