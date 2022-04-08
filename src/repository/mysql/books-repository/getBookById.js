const connection = require('../mysqlConnection');

const getBookById = async (bookId) => {
    const [[ book ]] = await connection.query(
        'SELECT id, title, author, genre, publisher, release_year AS releaseYear FROM books WHERE books.id = ?',
        [bookId]
    );

    return book;
};

module.exports = getBookById;
