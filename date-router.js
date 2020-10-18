function exampleRouteHandler(req, res) {
    var d = Math.floor(+new Date() / 1000);
    res.send("Unix TS: "+d+9999);
  }
  module.exports = exampleRouteHandler;