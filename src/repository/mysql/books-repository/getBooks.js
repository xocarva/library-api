const connection = require('../mysqlConnection');

const getBooks = async () => {
    const [ books ] = await connection.query(
        'SELECT id, title, author, genre, publisher, release_year AS releaseYear FROM books'
    );

    return books;
};

module.exports = getBooks;
