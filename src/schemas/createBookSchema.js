const Joi = require("joi");

const createBookSchema = Joi.object({

    title: Joi.string().min(1).max(50).required(),
    author: Joi.string().min(2).max(50).required(),
    genre: Joi.string()
            .valid('fantasy', 'sci-fi', 'historical', 'romance', 'biography', 'comedy', 'thriller', 'essay', 'others'),
    publisher: Joi.string().min(2).max(50).required(),
    releaseYear: Joi.number().integer().min(1900).max(new Date().getFullYear()).required(),
    isbn: Joi.string()
            .regex(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/).message('wrong isbn format')
            .required(),

});

module.exports = createBookSchema;
