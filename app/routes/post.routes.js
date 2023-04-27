const controller = require("../controllers/post.controller");
const upload = require("../middlewares/uploadfiles");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.get("/api/post/getmyposts", controller.mypost);
  app.post("/api/post/createpost",controller.createpost);
};
