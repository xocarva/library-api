const { booksRepository }  = require('../../repository/mysql');
const { createBookSchema } = require('../../schemas');

const createBook = async (req, res) => {

    const book = req.body;

    try {
        await createBookSchema.validateAsync( book );

    } catch ( error ) {
        res.status( 400 );
        res.send({ error: error.message })
        return;
    };

    let isbnExists;

    try {
        const { isbn } = book;
        const books = await booksRepository.getBooksByAttributes({ isbn });
        isbnExists = books.length > 0;

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

    let insertId;

    try {
        insertId = await booksRepository.saveBook( book );

    } catch ( error ) {
        res.status( 500 );
        res.send({ error: error.message });
        return;
    }

    res.status( 201 );
    res.send({
        message: 'Book has been created',
        data: {
            bookId: insertId,
        },
    });
};

module.exports = createBook;
