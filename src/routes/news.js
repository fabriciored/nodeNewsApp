const dbConnection = require('../config/dbConnection');

module.exports = (app) => {
  app.get("/news", (req, res) => {
    
    const connection = dbConnection();

    connection.query("select * from news", (err, result) => {
        res.render("news/news", {news: result});
    });

    // 
  });
};
