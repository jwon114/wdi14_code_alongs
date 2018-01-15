-- dish (name, image_url, location, creator)

CREATE DATABASE goodfoodhunting

CREATE TABLE dishes (
	id SERIAL PRIMARY KEY,
	name VARCHAR(300),
	image_url VARCHAR(400)
);

INSERT INTO dishes (name, image_url) VALUES ('pudding', 'http://img.taste.com.au/bz2rQPJ6/taste/2016/11/soft-centred-chocolate-pudding-16964-1.jpeg');