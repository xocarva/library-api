require( 'dotenv' ).config();

const connection = require('./src/repository/mysql/mysqlConnection');

const initDB = async () => {

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

        await connection.query(`
            INSERT INTO books (title, author, genre, publisher, release_year, isbn)
            VALUES(
                "Honest Politicians",
                "Claudia Sarcasm",
                "Comedy",
                "Joke Co",
                "2001",
                "4740284882812"
            )

        `);

        await connection.query(`
            INSERT INTO books (title, author, genre, publisher, release_year, isbn)
            VALUES(
                "Extraordinary APIs: not this one",
                "Laura Mean",
                "others",
                "Bankrupt Publishing",
                "2022",
                "3849383189354"
            )

        `);

        await connection.query(`
            INSERT INTO books (title, author, genre, publisher, release_year, isbn)
            VALUES(
                "Halitosis dragons: double nightmare",
                "George RR Delay",
                "fantasy",
                "Let Me Alone Books",
                "2018",
                "3849374789351"
            )

        `);

        await connection.query(`
            INSERT INTO books (title, author, genre, publisher, release_year, isbn)
            VALUES(
                "Leaving the office on time",
                "Asimobbing",
                "sci-fi",
                "Distopic Publishing",
                "2013",
                "3844930789351"
                )

        `);
        await connection.query(`
            INSERT INTO books (title, author, genre, publisher, release_year, isbn)
            VALUES(
                "Year 1: When everything went wrong",
                "Steve Scheerful",
                "historical",
                "Ancient Books",
                "2017",
                "3844930723451"
                )

        `);
        console.log('Books created');

    } catch ( error ) {
        console.error( error );

    } finally {
        process.exit( 0 );
    };

};

initDB();