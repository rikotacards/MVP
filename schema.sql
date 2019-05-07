CREATE DATABASE restaurants;

\c restaurants

CREATE TABLE IF NOT EXISTS menu1 (
  id SERIAL PRIMARY KEY,
  itemName varchar (50),
  itemPrice integer,
  itemDesc varchar (1000),
  itemRating integer,
  itemCategory varchar (50)
);

CREATE TABLE IF NOT EXISTS reviews1 (
id SERIAL PRIMARY KEY,
itemId integer,
reviewContent varchar (1000),
userName varchar (100)
);


\copy menu1 (itemName, itemPrice, itemDesc, itemRating, itemCategory) FROM '/Users/Maxwell/Desktop/HRR37/MVP/database/sampleData.csv' DELIMITER ',' CSV HEADER;

\copy reviews1 (itemId, reviewContent, userName) FROM '/Users/Maxwell/Desktop/HRR37/MVP/database/sampleReviews.csv' DELIMITER ',' CSV HEADER