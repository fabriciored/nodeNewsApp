const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home/index')
})

app.get('/form_news', (req, res) => {
    res.render('admin/form_add_news.ejs')
})

app.get('/newsPortal', (req, res) => {
    res.render('news/newsPortal')
})


app.listen(3000, () => {
    console.log('Server running on Express')
})