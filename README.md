
# Hyper Express Starter
Get started with Hyper Express effortlessly

<div align="left">

[![GitHub issues](https://img.shields.io/github/issues/AhmedEl5WaGa/hyper-express-starter)](https://github.com/AhmedEl5WaGa/hyper-express-starter/issues)
[![GitHub stars](https://img.shields.io/github/stars/AhmedEl5WaGa/hyper-express-starter)](https://github.com/kartikk221/AhmedEl5WaGa/hyper-express-starter)
[![GitHub license](https://img.shields.io/github/license/AhmedEl5WaGa/hyper-express-starter)](https://github.com/AhmedEl5WaGa/hyper-express-starter/blob/master/LICENSE)

</div>


## Features

- Well-structured: Organized project structure to get you started quickly and efficiently.
- Middleware Examples: Ready-to-use middleware examples to handle various functionalities.
- Router Examples: Examples of setting up routers to manage different routes.
- Mongoose and MongoDB: Integrated with Mongoose and MongoDB for seamless database operations.
- Logger: Built-in logging functionality to monitor your application's performance.
- Async Error Handling: Handles asynchronous errors gracefully.
- Global Error Handling: Centralized error handling mechanism to manage errors efficiently.

## Motivation

Hyper Express Starter is designed to provide a quick and easy setup for developers to start building high-performance web applications using Hyper Express. Leveraging the power of uWebsockets.js, this starter kit ensures that your applications can handle high throughput with existing hardware.

## Installation

### Getting Started

 - Clone the repository:

```bash
  git clone https://github.com/AhmedEl5WaGa/hyper-express-starter.git
  cd hyper-express-starter
```
- Install dependencies:

    Ensure you have Node.js installed, then run the following command to install the dependencies:
```bash
    npm install
```
- Set up environment variables as needed.

  rename .env.sample to .env

- Start the server:
   - dev
   ```bash
    npm run dev
   ```
   - prod
   ```bash
    npm run start
   ```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV` development | production

`PORT` 4000

`MONGODB_URL` 


## Documentation

- Middlewares
Check out the middlewares/ directory for examples of how to create and use middleware in your application.

- Routers
The routers/ directory contains examples of setting up routes and handling different HTTP methods.

- Mongoose and MongoDB
In the router/v1/api/api.model.js directory, you can find examples of Mongoose models and how to interact with MongoDB from api.controller.js.

- Logger
The utilities/loggers folder provides a simple logging mechanism to help you monitor your application's performance.

- Async Error Handling
Errors in asynchronous operations are handled gracefully using utility functions.

- Global Error Handling
A centralized error handling mechanism is implemented to manage all errors efficiently.

- Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to enhance the project.

License
MIT
