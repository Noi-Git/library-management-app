SHOW DATABASES;
USE libraryDB;

SHOW TABLES;

DESCRIBE users;

SHOW COULUMNS FROM books;



SELECT book_id, book_title, book_description, book_image_url, total_copies, author_first_name, author_last_name, author_middlename, genre_name
FROM books
INNER JOIN authors ON books.author_id = authors.author_id
INNER JOIN genre ON books.genre_id = genre.genre_id;

