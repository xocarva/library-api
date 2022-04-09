const connection = require('../mysqlConnection');

const getBooksByAttributes = async ( attributes ) => {

    const { title, author, genre, publisher, releaseYear, isbn } = attributes;

    if ( !title && !author && !genre && !publisher && !releaseYear && !isbn ) return;

    const params = [];
    let query = 'SELECT id, title, author, genre, publisher, release_year, isbn FROM books WHERE';

    if( title ) {
        query += ' title = ?';
        params.push( title );
    };

    if( author ) {
        if (params.length > 0) query += ' AND';
        query += ' author = ?';
        params.push( author );
    };

    if( genre ) {
        if (params.length > 0) query += ' AND';
        query += ' genre = ?';
        params.push( genre );
    };

    if( publisher ) {
        if (params.length > 0) query += ' AND';
        query += ' publisher = ?';
        params.push( publisher );
    };

    if( releaseYear ) {
        if (params.length > 0) query += ' AND';
        query += ' releaseYear = ?';
        params.push( releaseYear );
    };

    if( isbn ) {
        if (params.length > 0) query += ' AND';
        query += ' isbn = ?';
        params.push( isbn );
    };

    const [ books ] = await connection.query( query, params );

    return books;
};

module.exports = getBooksByAttributes;
