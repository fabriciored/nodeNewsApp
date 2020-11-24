var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexao com o bd foi estabelecida');
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'pass',
        database: 'portal_news'
    });
}

module.exports = function(){
    console.log('DB Connection module autoloaded');
    return connMySQL;
}