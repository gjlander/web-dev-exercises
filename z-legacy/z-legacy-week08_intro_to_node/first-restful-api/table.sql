CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(510) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(255) NOT NULL,
    price NUMERIC(7, 2) NOT NULL,
    stock INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);