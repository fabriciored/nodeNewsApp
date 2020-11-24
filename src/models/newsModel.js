module.exports = () => {

    this.getNews = (connection, callback) => {
        connection.query('select * from news', callback)
    };

    this.getNew = (connection, callback) => {
        connection.query('SELECT * FROM news where id_news = 2', callback)
    }

    return this;
}