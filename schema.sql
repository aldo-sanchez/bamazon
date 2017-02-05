/*CREATE DATABASE bamazon_db;*/

USE bamazon_db;

/*CREATE TABLE products (
	item_id  INT UNSIGNED NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2),
    stock_quantity  INT NOT NULL,
    PRIMARY KEY(item_id)
);*/

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('Thinkpad X1 Yoga', 'Electronics', 1400.78, 10),
('Coffee Mug', 'Kitchen', 4.00, 25),
('iPhone SE', 'Electronics', 299.99, 3),
('Laptop Sleeve', 'Electronics', 13.75, 34),
('Boots', 'Apparel', 120.00, 17),
('In Cold Blood', 'Books', 15.00, 8),
('Green T-Shirt', 'Apparel', 15.00, 21),
('As I Lay Dying', 'Books', 13.00, 10),
('The Wall', 'Music', 30.00, 45),
('Thick as a Brick', 'Music', 15.00, 13);

SELECT * FROM products
