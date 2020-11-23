module.exports = (app) => {
app.get('/newsForm', (req, res) => {
    res.render('admin/form_add_news.ejs')
})
}