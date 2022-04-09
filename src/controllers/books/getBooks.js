const { booksRepository } = require('../../repository/mysql');

const getBooks = async (req, res) => {

    let books;

    try {
        books = await booksRepository.getBooks();

    } catch (error) {
        res.status( 500 );
        res.send({ error: error.message });
        return;
    };

    res.status( 200 );
    res.send({
        message: 'ok',
        data: books,
    });
};

module.exports = getBooks;
