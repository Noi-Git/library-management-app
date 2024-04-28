SHOW DATABASES;
USE libraryDB;

SHOW TABLES;

DESCRIBE users;

SHOW COULUMNS FROM books;



SELECT book_id, book_title, book_description, book_image_url, total_copies, author_first_name, author_last_name, author_middlename, genre_name
FROM books
INNER JOIN authors ON books.author_id = authors.author_id
INNER JOIN genre ON books.genre_id = genre.genre_id;


-- set up pagination in database
-- PROCEDURE is similar to function in js
-- CREATE DEFINER=`root`@`localhost` PROCEDURE `Get_Pagination` (
CREATE PROCEDURE Get_Pagination (
  page_size INT,
  page_index INT
)

BEGIN
  DECLARE skip_records INT;
  SET skip_records = (page_size * (page_index - 1));

  SELECT * FROM books
  ORDER BY book_title
  LIMIT page_size
  OFF SET skip_records;

  SELECT page_size, page_index, COUNT(*) AS TotalCount, CEIL(COUNT(*) / page_size) AS TotalPage
  FROM books;
END

