require( 'dotenv' ).config();
const server = require('./src/server');

console.log(server)

server.start();
