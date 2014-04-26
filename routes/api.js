var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/article/:id', function(req, res) {
  var data = [
    {"author": "木頭", "title" : "文章一", "content": "文字内容一.........."},
    {"author": "毛泽东", "title" : "文章二", "content": "沁园春长沙.........JavaScript function for hashing messages with MD5."}
  ];

  console.log(req.param("id"))
  var id = parseInt(req.param("id"), 10) - 1;
  var article = typeof data[id] !== "undefined" ? data[id] : {"author": "", "title" : "", "content": ""}
  res.json(article);
});

router.get('/users', function(req, res) {
  res.json([{ name: 'wangxian' }, { name: 'wubi' }])
});

module.exports = router;
