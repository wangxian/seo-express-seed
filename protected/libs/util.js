
// 是否是搜索引擎
var spiderRegexp = new RegExp('Baiduspider|Googlebot|BingBot|curl', 'i')
exports.isRobots = function (req) {
  var ua = req.get("user-agent")
  return spiderRegexp.test(ua);
}