const Joi = require("joi");

const updateBookSchema = Joi.object({

    title: Joi.string().min( 1 ).max( 50 ),
    author: Joi.string().min( 2 ).max( 50 ),
    genre: Joi.string()
            .valid('fantasy', 'sci-fi', 'historical', 'romance', 'biography', 'comedy', 'thriller', 'essay', 'others'),
    publisher: Joi.string().min( 2 ).max( 50 ),
    releaseYear: Joi.number().integer().min( 1900 ).max( new Date().getFullYear() ),
    isbn: Joi.string()
            .regex(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/).message( 'wrong isbn format' ),

});

module.exports = updateBookSchema;
