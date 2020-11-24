const app = require('./src/config/server');

//const newsFormRoute = require('./src/routes/newsform')(app);

//const homeRoute = require('./src/routes/home')(app);

//const newsRoute = require('./src/routes/news')(app);


app.listen(3000, () => {
    console.log('Server running on port 3000')
})