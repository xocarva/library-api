DROP DATABASE IF EXISTS library;
CREATE DATABASE library;

USE library;

CREATE TABLE IF NOT EXISTS books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    genre ENUM("fantasy", "sci-fi", "historical", "romance", "biography", "comedy", "thriller", "essay", "others") DEFAULT "others" NOT NULL,
    publisher VARCHAR(100) NOT NULL,
    release_year INT NOT NULL,
    isbn VARCHAR(100) UNIQUE NOT NULL
);
