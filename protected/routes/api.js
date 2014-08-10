var express = require('express');
var router = express.Router();

var article = [
  {
    "author": "木頭",
    "title" : "三星堆遗址",
    "content": "三星堆博物馆 是迄今在西南地区发现的范围最大、"+
              "延续时间最长、文化内涵最丰富的古城、古国、古蜀文化遗址。现有保存最完整的东、西、南城墙和月亮湾内城墙。"+
              "三星堆遗址被称为20世纪人类最伟大的考古发现之一，昭示了长江流域与黄河流域一样，同属中华文明的母体，"+
              "被誉为“长江文明之源”。"
  },
  {
    "author": "毛泽东",
    "title" : "沁园春长沙",
    "content":  "独立寒秋，湘江北去，橘子洲头。 <br />"+
                "看万山红遍，层林尽染；漫江碧透，百舸争流。 <br />"+
                "鹰击长空，鱼翔浅底，万类霜天竞自由。 <br />"+
                "怅寥廓，问苍茫大地，谁主沉浮？ <br />"+
                "携来百侣曾游，忆往昔峥嵘岁月稠。 <br />"+
                "恰同学少年，风华正茂；书生意气，挥斥方遒。<br />"+
                "指点江山，激扬文字，粪土当年万户侯。 <br />"+
                "曾记否，到中流击水，浪遏飞舟？<br />"+
                "(完）<br /><br /><br />"+
                "独立寒秋，湘江北去，橘子洲头。 <br />"+
                "看万山红遍，层林尽染；漫江碧透，百舸争流。 <br />"+
                "鹰击长空，鱼翔浅底，万类霜天竞自由。 <br />"+
                "怅寥廓，问苍茫大地，谁主沉浮？ <br />"+
                "携来百侣曾游，忆往昔峥嵘岁月稠。 <br />"+
                "恰同学少年，风华正茂；书生意气，挥斥方遒。<br />"+
                "(完）<br /><br /><br />"+
                "独立寒秋，湘江北去，橘子洲头。 <br />"+
                "看万山红遍，层林尽染；漫江碧透，百舸争流。 <br />"+
                "鹰击长空，鱼翔浅底，万类霜天竞自由。 <br />"+
                "怅寥廓，问苍茫大地，谁主沉浮？ <br />"+
                "携来百侣曾游，忆往昔峥嵘岁月稠。 <br />"+
                "恰同学少年，风华正茂；书生意气，挥斥方遒。<br />"+
                "(完）<br /><br /><br />"+
                "独立寒秋，湘江北去，橘子洲头。 <br />"+
                "看万山红遍，层林尽染；漫江碧透，百舸争流。 <br />"+
                "鹰击长空，鱼翔浅底，万类霜天竞自由。 <br />"+
                "怅寥廓，问苍茫大地，谁主沉浮？ <br />"+
                "携来百侣曾游，忆往昔峥嵘岁月稠。 <br />"+
                "恰同学少年，风华正茂；书生意气，挥斥方遒。<br />"+
                "(完）<br /><br /><br />"

  }
];

/* GET users listing. */
router.get('/article/:id', function(req, res) {
  var id = parseInt(req.param("id"), 10);
  // console.log(id, req.param("id"));
  if(id > 0) {
    id = id - 1;
    var data = typeof article[id] !== "undefined" ? article[id] : {"author": "", "title" : "", "content": ""};
    res.json(data);
  } else {
    var titles = article.map(function(d){ return d.title; });
    res.json(titles);
  }
});

router.get('/users', function(req, res) {
  res.json([{ name: 'wangxian' }, { name: 'wubi' }]);
});

module.exports = router;
