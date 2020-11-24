const app = require('../../config/server');

module.exports = function(app){

    app.get('/news', function(req,res){

        var connection = app.config.dbConnection();

        connection.query("SELECT * FROM news", function(error, result){
            res.render('news/news', { news : result });
        });

    });
}