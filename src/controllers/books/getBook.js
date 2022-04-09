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

    res.status( 200 );
    res.send({
        message: 'ok',
        data: book,
    });
};

module.exports = getBook;
