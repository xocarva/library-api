const connection = require('../mysqlConnection');

const saveBook = async ( book ) => {

    const { title, author, genre, publisher, releaseYear } = book;

    const [{ insertId }] = await connection.query(
        'INSERT INTO books (title, author, genre, publisher, release_year) VALUE (?, ?, ?, ?, ?)',
        [ title, author, genre, publisher, releaseYear ]
    );

    return insertId;
};

module.exports = saveBook;
