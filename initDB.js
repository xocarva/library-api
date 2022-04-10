require( 'dotenv' ).config();

const mysql = require('mysql');
const connection = require('./src/repository/mysql/mysqlConnection');

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
        process.exit( 0 );
    };
};

const createTables = async () => {

    try {
        await connection.query( 'DROP TABLE IF EXISTS books' );
        console.log( 'Tables deleted' );

        await connection.query(`
            CREATE TABLE IF NOT EXISTS books (
                id INT PRIMARY KEY AUTO_INCREMENT,
                title VARCHAR(100) NOT NULL,
                author VARCHAR(100) NOT NULL,
                genre ENUM("fantasy", "sci-fi", "historical", "romance", "biography", "comedy", "thriller", "essay", "others") DEFAULT "others" NOT NULL,
                publisher VARCHAR(100) NOT NULL,
                release_year INT NOT NULL,
                isbn VARCHAR(100) UNIQUE NOT NULL
            )
        `);
        console.log( 'Tables created' );

    } catch ( error ) {
        console.error( error );

    } finally {
        process.exit( 0 );
    };
};

const initDB = () => {
    createDatabase();
    setTimeout( createTables, 50 );
}

initDB();
