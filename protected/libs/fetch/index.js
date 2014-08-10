var path         = require('path');
var childProcess = require('child_process');
var phantomjs    = require('phantomjs');
var binPath      = phantomjs.path;

var CACHE = {};

module.exports = function(url, callback, useCache) {

  // 缓存过期了
  if(typeof CACHE[url] !== "undefined" ) {
    if( CACHE[url].created + 2592000 < Date.now() ) {
      delete CACHE[url];
    } else {
      callback(null, CACHE[url].data, null);
      return;
    }
  }

  var execFile = path.join(__dirname + '/fetch.js');
  var domain = "http://localhost:"+ require("../../app").get("port");
  var childArgs = [ execFile, domain + url ];
  // console.log(binPath, childArgs);

  // 创建子进程
  childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
    CACHE[url] = {
      created: Date.now(),
      data: stdout
    };

    callback(err, stdout, stderr);
  });
};
