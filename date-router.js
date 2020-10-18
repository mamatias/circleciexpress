function exampleRouteHandler(req, res) {
    var d = Math.floor(+new Date() / 1000);
    res.send("Unix TS: "+(d));
  }
  module.exports = exampleRouteHandler;