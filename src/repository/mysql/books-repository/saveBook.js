const connection = require('../mysqlConnection');

const saveBook = async ( book ) => {

    const { title, author, genre, publisher, releaseYear, isbn } = book;

    const [{ insertId }] = await connection.query(
        'INSERT INTO books (title, author, genre, publisher, release_year, isbn) VALUE (?, ?, ?, ?, ?, ?)',
        [ title, author, genre, publisher, releaseYear, isbn ]
    );

    return insertId;
};

module.exports = saveBook;
