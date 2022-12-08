

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories(
	id UUID primary key default uuid_generate_v4(),,
	name VARCHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS products(
	id UUID primary key default uuid_generate_v4(),, 
	name VARCHAR(200) NOT NULL,
	price DECIMAL(9,2) NOT NULL,
	category_id integer,
	FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE  CASCADE
);