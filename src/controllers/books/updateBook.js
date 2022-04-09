const { booksRepository } = require('../../repository/mysql');
const { updateBookSchema } = require('../../schemas');

const updateBook = async (req, res) => {

    const { bookId } = req.params;
    const bookData = req.body;

    try {
        await updateBookSchema.validateAsync( bookData );

    } catch ( error ) {
        res.status( 400 );
        res.send({ error: error.message })
        return;
    };

    if ( bookData.isbn ) {

        let isbnExists;

        try {
            const matchingIsbnBooks = await booksRepository.getBooksByAttributes({ isbn: bookData.isbn });
            const othermatchingBooks = matchingIsbnBooks.filter( book => +book.id !== +bookId  );
            isbnExists = othermatchingBooks.length > 0;

        } catch ( error ) {
            res.status( 500 );
            res.send({ error: error.message })
            return;
        };

        if ( isbnExists ) {
            res.status( 409 );
            res.send({ error: 'ISBN already registered' });
            return;
        };
    };

    let updated;

    try {
         updated = !!await booksRepository.updateBook({ id: bookId, ...bookData });

    } catch ( error ) {
        res.status( 500 );
        res.send({ error: error.message });
        return;
    };

    let book;

    if ( updated ) {
        try {
            book = await booksRepository.getBookById( bookId );

        } catch ( error ) {
            res.status( 500 );
            res.send({ error: 'Book has been updated, but an error occurred: ' + error.message });
            return;
        };
    };

    res.status( 200 );
    res.send({
        message: 'Book updated',
        data: book,
    });
};

module.exports = updateBook;
