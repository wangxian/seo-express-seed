var express = require('express');
var router  = express.Router();

var fetch   = require("../libs/fetch");
var util    = require("../libs/util");

router.get('/', function(req, res) {
  if(!util.isRobots(req)) {
    // res.render(req.app.settings.rootdir + "/public/index.html", { title: '前后端解耦合开发，支持搜索引擎蜘蛛 - 演示' });
    res.sendfile(req.app.settings.rootdir + "/public/index.html");
  } else {
    fetch("/", function(err, stdout, stderr){
      res.end(stdout);
    });
  }
});

router.get('/*', function(req, res){
  if(util.isRobots(req)) {
    var url = req.param(0);
    console.log("搜索引擎请求:http://hostname:port/"+ url);

    fetch("/#!/"+ url, function(err, stdout, stderr){
      res.end(stdout);
    });
  } else {
    res.redirect(301, '/#!'+ req.url);
  }
});

// 启动后把首页给缓存下来，给spider
setTimeout(function(){
  fetch("/", function(){ console.log("缓存首页完成！"); });
  fetch("/#!/article/1", function(){ console.log("缓存/article/1完成！"); });
  fetch("/#!/article/2", function(){ console.log("缓存/article/2完成！");  });
}, 10e3);

module.exports = router;
