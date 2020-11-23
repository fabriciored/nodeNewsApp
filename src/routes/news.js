module.exports = (app) => {
  app.get("/news", (req, res) => {
    const mysql = require("mysql");

    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "pass",
      database: "portal_news",
    });

    connection.query("select * from news", (err, result) => {
        res.render("news/newsPortal", {news: result});
    });

    // 
  });
};
