# Shop site
## Visit https://szyjar.github.io/e-shop-site/ for live project.
Backend is hosted on replit.com https://replit.com/@RedGlimmer/e-shop

#
Users can access store information and explore product assortment.
Shopping cart is saved locally, user can freely add and remove items from shopping cart.
Users can log in or create accounts, after login it is possible to add new items to store database.
User authentication is done via JSON web tokens.

![image](https://github.com/SzyJar/e-shop-site/assets/107247457/28d1a4fc-1738-4c9a-9b68-9fea32d7e216)


# API Endpoints

## Login
- Method: `POST`
- Endpoint: `https://e-shop.redglimmer.repl.co/login`
```json
{
  "name": "your_username",
  "password": "your_password"
}
```
## Register new user
- Method: `POST`
- Endpoint: `https://e-shop.redglimmer.repl.co/signup`
```json
{
  "name": "your_username",
  "password": "your_password"
}
```
## Logout
- Method: `POST`
- Endpoint: `https://e-shop.redglimmer.repl.co/logout`

Include the JWT in the `Authorization` header
## Get all products data
- Method: `GET`
- Endpoint: `https://e-shop.redglimmer.repl.co/product`
## Get one product data
- Method: `GET`
- Endpoint: `https://e-shop.redglimmer.repl.co/product/:productname`
## Add product to the database
- Method: `POST`
- Endpoint: `https://e-shop.redglimmer.repl.co/product/:productname`

Include the JWT in the `Authorization` header
```json
{
    "image": "product_image_link",
    "description": "product_description",
    "releaseDate": "product_date",
    "company": "company_name",
    "price": "product_price"
}
```
## Modify product
Requires administrator account
- Method: `PUT`
- Endpoint: `https://e-shop.redglimmer.repl.co/product/:productname`

Include the JWT in the `Authorization` header
```json
{
    "image": "product_image_link",
    "description": "product_description",
    "releaseDate": "product_date",
    "company": "company_name",
    "price": "product_price"
}
```
## Remove product
Requires administrator account
- Method: `DELETE`
- Endpoint: `https://e-shop.redglimmer.repl.co/product/:productname`

Include the JWT in the `Authorization` header
