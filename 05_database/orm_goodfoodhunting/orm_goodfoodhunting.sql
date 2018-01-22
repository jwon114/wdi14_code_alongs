-- dish (name, image_url, location, creator)

CREATE DATABASE goodfoodhunting

CREATE TABLE dishes (
	id SERIAL PRIMARY KEY,
	name VARCHAR(300),
	image_url VARCHAR(400)
);

CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	body VARCHAR(500) NOT NULL,
	dish_id INTEGER NOT NULL,
	FOREIGN KEY (dish_id) REFERENCES dishes (id) ON DELETE RESTRICT
);

CREATE TABLE dish_types (
	id SERIAL PRIMARY KEY,
	name VARCHAR(300)
);

INSERT INTO dishes (name, image_url) VALUES ('pudding', 'http://img.taste.com.au/bz2rQPJ6/taste/2016/11/soft-centred-chocolate-pudding-16964-1.jpeg');

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	email VARCHAR(300) NOT NULL,
	password_digest VARCHAR(400)
);