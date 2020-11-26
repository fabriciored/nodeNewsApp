module.exports = function (app) {
  app.get("/news", function (req, res) {
    var connection = app.config.dbConnection();
    var newsModel = app.src.models.newsModel;

    newsModel.getNews(connection, function (error, result) {
      res.render("news/news", { news: result });
    });
  });
};
