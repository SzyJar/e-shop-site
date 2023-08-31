[![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=white)](#) [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](#) [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white)](#) [![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](#)
# Shop site
Explore assortment of the internet shop, add products to your shop cart and apply discount. Log in and add new items to store database.


# Functionality
* User can access store information and explore product assortment
* Shopping cart is saved in browser cache, user can freely add and remove items from shopping cart
* User can log in or create account, after login it is possible to add new items to store database
* User authentication is done via JSON web token

![image](https://github.com/SzyJar/e-shop-site/assets/107247457/28d1a4fc-1738-4c9a-9b68-9fea32d7e216)
*Home page*

# API's Endpoints

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
