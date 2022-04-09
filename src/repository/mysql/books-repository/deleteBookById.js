const connection = require('../mysqlConnection');

const deleteBookById = async ( bookId ) => {
    const [{ affectedRows }] = await connection.query(
        'DELETE FROM books WHERE books.id = ?',
        [ bookId ]
    );

    return affectedRows;
};

module.exports = deleteBookById;
