require( 'dotenv' ).config();

const mysql = require('mysql');

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;


const con = mysql.createConnection({

    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,

});

const createDatabase = () => {

    try {
        con.connect( ( error ) => {
            if ( error ) throw error;
            console.log( 'Connected' );

            con.query( `DROP DATABASE IF EXISTS ${MYSQL_DATABASE}`, ( error ) => {
                if ( error ) throw error;
                console.log( 'Database deleted' );
            });

            con.query( `CREATE DATABASE IF NOT EXISTS ${MYSQL_DATABASE}`, ( error ) => {
                if ( error ) throw error;
                console.log( 'Database created' );
            });
        });

    } catch ( error ) {
        console.log( 'Error creating database: ' + error );
    };
};

createDatabase();
