
// 是否是搜索引擎
var spiderRegexp = new RegExp("Baiduspider|Googlebot|BingBot|MSNBot|YoudaoBot|Sosospider|360Spider|Sogou web spider|Sogou inst spider|curl|Wget", "i");
exports.isRobots = function (req) {
  var ua = req.get("user-agent");
  return spiderRegexp.test(ua);
};