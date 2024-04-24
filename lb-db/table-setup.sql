-- === see what is in the table ===
-- DESCRIBE users;

-- --- Example loadding info to the database ---
-- load all table in the: login to mysql -- source database name/file name
-- mysql> source library_database/data.sql

ALTER TABLE users RENAME COLUMN password TO user_password;

CREATE TABLE users (
  user_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_firstname VARCHAR(150) NOT NULL,
  user_lastname VARCHAR(150) NOT NULL,
  user_password VARCHAR(50) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  deketed_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE authors_type (
  author_type_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  author_type VARCHAR(150) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  deketed_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE authors (
  author_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  author_firstname VARCHAR(100) NOT NULL,
  author_lastname VARCHAR(100) NOT NULL,
  author_middlename VARCHAR(25),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  deketed_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE genre (
  genre_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  genre_name VARCHAR(150) NOT NULL
);


CREATE TABLE books (
  book_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  book_title VARCHAR(500) NOT NULL,
  book_description VARCHAR(5000) NOT NULL,
  book_image_url VARCHAR(255),
  genre_id INT,
  FOREIGN KEY (genre_id) REFERENCES genre(genre_id),
  author_id INT,
  FOREIGN KEY (author_id) REFERENCES authors(author_id),
  author_type_id INT,
  FOREIGN KEY (author_type_id) REFERENCES authors_type(author_type_id),
  total_copies INT NOT NULL,
  available_copies INT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  deketed_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE checkouts (
  checkout_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  FOREIGN KEY(user_id) REFERENCES users(user_id),
  book_id INT,
  FOREIGN KEY(book_id) REFERENCES books(book_id),
  checkout_date TIMESTAMP DEFAULT NOW(),
  due_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  deketed_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE returns (
  return_id INTEGER PRIMARY KEY AUTO_INCREMENT,
  return_date TIMESTAMP DEFAULT NOW(),
  checkout_id INT,
  FOREIGN KEY(checkout_id) REFERENCES checkouts(checkout_id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  deketed_at TIMESTAMP DEFAULT NOW()
);






