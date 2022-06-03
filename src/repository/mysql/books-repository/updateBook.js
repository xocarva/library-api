const connection = require('../mysqlConnection');

const updateBook = async ( bookData ) => {

    const { id, title, author, genre, publisher, releaseYear, isbn } = bookData;

    if( !title && !author && !genre && !publisher && !releaseYear && !isbn ) return;

    let query = 'UPDATE books SET';

    const params = [];

    if( title ) {
        query += ' title = ?';
        params.push( title );
    };

    if( author ) {
        if ( params.length > 0 ) query += ',';
        query += ' author = ?';
        params.push( author );
    };

    if( genre ) {
        if ( params.length > 0 ) query += ',';
        query += ' genre = ?';
        params.push( genre );
    };

    if( publisher ) {
        if ( params.length > 0 ) query += ',';
        query += ' publisher = ?';
        params.push( publisher );
    };

    if( releaseYear ) {
        if ( params.length > 0 ) query += ',';
        query += ' release_year = ?';
        params.push( releaseYear );
    };

    if( isbn ) {
        if ( params.length > 0 ) query += ',';
        query += ' isbn = ?';
        params.push( isbn );
    };

    query += ' WHERE id = ?';

    const [{ affectedRows }] = await connection.query( query, [ ...params, id ] );

    return affectedRows;

};

module.exports = updateBook;
