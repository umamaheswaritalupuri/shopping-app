CREATE DATABASE IF NOT EXISTS shopping;
USE shopping;

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL
);

INSERT INTO products (name, price) VALUES
('Laptop', 999.99),
('Smartphone', 699.99),
('Headphones', 199.99),
('Shoes', 89.99),
('Backpack', 49.99);
