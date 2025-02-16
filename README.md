# E-Commerce Application

An E-commerce web application built with **Angular v19** and **Json-Server** as the backend. This project is designed for two types of users: **Sellers** and **Users**. The application allows Sellers to add/update products and Users to purchase products. Each user type has its own authentication and set of functionalities.

## Features

### 1. User Authentication:
- **Seller** and **User** roles with separate authentication systems.
- Sellers cannot purchase products.
- Users cannot add products to sell.

### 2. Seller Functionalities:
- **Register/Login** as a seller.
- **Add/Update** products to sell.
- **View** a list of all products available in the system.

### 3. User Functionalities:
- **Register/Login** as a user.
- **Browse** products listed by sellers.
- **Add/Remove** products from the cart.
- **Checkout** and place orders.
- **View** order history.
- **Cancel** any order before it is shipped.

### 4. Cart and Checkout:
- Users can add and remove products from their cart.
- Secure checkout process to complete orders.
- A list of all orders placed by the user is accessible for tracking.

### 5. Product Management:
- Sellers have full control over their products, including updating and deleting products.

## Technology Stack
- **Frontend**: Angular v19
- **Backend**: Json-Server (for RESTful API)
- **Authentication**: Custom authentication for both Sellers and Users (using tokens)
- **State Management**: In-built Angular Services and Observables for state management

## Installation

### 1. Clone the Repository:
```bash
git clone https://github.com/PulkitMitt/E-Comm_Angular.git
cd e-commerce-angular
```

### 2. Install Dependencies:
```bash
npm install
```

### 3. Set up the Backend with Json-Server:
To run the backend using Json-Server, you need to start it using the following command:
```bash
json-server --watch db.json --port 3000
```
This will start the backend on http://localhost:3000 and will listen for changes in db.json to update the database.

### 4. Run the Angular Application:

To run the backend using Json-Server, you need to start it using the following command:
```bash
ng-serve
```
The application will be running at http://localhost:4200.

## How to Use

### 1. Seller:

- **Register as a Seller**:  
  Go to the **Seller Register** page to create your seller account.

- **After Logging In**:
  - **Add New Products**:  
    Navigate to the **Add Product** page to add new products for sale.
  - **Update Existing Products**:  
    To update any product, simply click on the product from the product list, make your changes, and save.
  - **View and Manage Products**:  
    View the full list of your listed products, and manage them as needed (edit or delete).

### 2. User:

- **Register as a User**:  
  Go to the **User Register** page to create a user account.

- **After Logging In**:
  - **Browse Products**:  
    Browse the products listed by various sellers.
  - **Add/Remove Products to/from Cart**:  
    You can add products to your cart or remove them at any time.
  - **Proceed to Checkout**:  
    Once you have finished shopping, proceed to the **Checkout** page to place your order.
  - **View Order History**:  
    View your order history and track your purchases from your account page.
  - **Cancel Orders**:  
    If an order is not yet shipped, you can cancel it from the order details page.


## Folder Structure

``` bash
/e-commerce-angular
├── /src
│   ├── /app
│   │   ├── /components        # Shared UI components (buttons, forms, etc.)
│   │   ├── /pages             # Pages (home, login, register, etc.)
│   │   ├── /services          # Angular services for data fetching and auth
│   │   ├── /models            # Models for data (Product, User, Order, etc.)
│   │   ├── /guards            # Auth guards for protecting routes
│   │   ├── app-routing.module.ts
│   │   ├── app.module.ts
│   ├── /assets                # Static files (images, styles, etc.)
│   └── index.html             # Entry point for the app
├── /db.json                   # Json-Server database file
└── package.json               # Project dependencies and scripts

```


## API Endpoints

The backend (Json-Server) provides the following endpoints:

- **POST /seller-auth**: Register/Login a seller.
- **POST /user-auth**: Register/Login a user.
- **GET /seller-home**: Get a list of all products.
- **POST /seller-add-product**: Add a product to the list by seller.
- **POST /seller-update-product/{id}**: update any product with productId.
- **POST /cart-page**: See cart page.
- **POST /checkout**: See checkout page.
- **GET /my-orders**: Get the list of all orders for the logged-in user.

## Future Improvements
- Add **payment gateway** for the checkout process.
- Implement **better validation** for form inputs.
- Improve **product search functionality**.
- Implement **role-based access control** more securely.

## Contributing
Feel free to **fork** the repository, open **issues**, or submit **pull requests** for improvements. Please ensure that all contributions follow the existing code style.

## License
This project is **open-source** and available under the [MIT License](LICENSE).


## Contact
For any questions, feel free to reach out to the project owner via [email or GitHub profile link].
```yml
This updated version now includes all the sections you asked for. It provides a comprehensive view of your e-commerce project, covering setup, features, API details, and additional improvements.
```


