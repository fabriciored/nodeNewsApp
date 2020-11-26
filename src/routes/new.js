const app = require("../../config/server");

module.exports = function (app) {
  app.get("/new", function (req, res) {
    var connection = app.config.dbConnection();
    var newsModel = app.src.models.newsModel;

    newsModel.getNew(connection, function (error, result) {
      res.render("news/new", { New: result });
    });
  });
};
