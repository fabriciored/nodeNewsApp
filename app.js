const app = require('./src/config/server');

const newsFormRoute = require('./src/routes/newsform');
newsFormRoute(app);

const homeRoute = require('./src/routes/home');
homeRoute(app);

const newsRoute = require('./src/routes/news');
newsRoute(app);

app.listen(3000, () => {
    console.log('Server running on port 3000')
})