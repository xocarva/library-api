const express = require( 'express' );
const cors = require( 'cors' );

const { booksRoutes } = require( './routes' );

const app = express();

app.use( cors() );
app.use( express.json() );
app.use( '/books', booksRoutes );

module.exports = app;
