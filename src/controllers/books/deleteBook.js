const { booksRepository } = require('../../repository/mysql');

const getBook = async (req, res) => {
    const { bookId } = req.params;

    let book;

    try {
        book = await booksRepository.getBookById( bookId );
    } catch ( error ) {
        res.status( 500 );
        res.send({ error: error.message });
        return;
    };

    if ( !book ) {
        res.status( 404 );
        res.send({ error:'Book not found' });
        return;
    };

    let deleted;

    try {
        deleted = await booksRepository.deleteBookById( bookId );
    } catch ( error ) {
        res.status( 500 );
        res.send({ error: error.message });
        return;
    };

    if ( !deleted ) {
        res.status( 400 );
        res.send({ error: 'Book could not be deleted' });
        return;
    };

    res.status( 200 );
    res.send({ message: 'Book has been deleted' });

};

module.exports = getBook;
