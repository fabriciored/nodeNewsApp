const app = require('../../config/server');

module.exports = function(app){

    app.get('/new', function(req,res){

        var connection = app.config.dbConnection();

        connection.query("SELECT * FROM news where id_news = 2", function(error, result){
            res.render('news/new', { New : result });
        });

    });
}