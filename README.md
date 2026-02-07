# User Authentication and Authorization with JWT

This project implements user authentication and authorization using Bearer tokens with Node.js, Express.js, Mongoose, and JWT. The application follows the MVC pattern and includes API documentation using Postman.

## Features
- User registration and login.
- Password hashing with bcryptjs.
- JWT-based authentication.
- Protected routes for authorized users.
- API documentation in Postman.

## API Endpoints
- **POST** `/register` - Register a new user.
- **POST** `/login` - Login and receive a JWT token.
- **GET** `/profile` - Get user information (protected route).

## Tech Stack
- Node.js
- Express.js
- Mongoose (MongoDB)
- bcryptjs
- JWT
- Postman