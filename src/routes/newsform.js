module.exports = (app) => {
  app.get("/newsform", (req, res) => {
    res.render("admin/form_add_news.ejs");
  });
};
