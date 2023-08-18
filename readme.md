# Node.js TypeScript Express Todo App

This repository contains a simple Todo application built using Node.js, TypeScript, and Express. The application allows you to perform CRUD (Create, Read, Update, Delete) operations on a list of tasks.

## Prerequisites

- Node.js (at least version 12)
- npm (Node Package Manager)
- TypeScript

## Getting Started

- Clone the repository: git clone https://github.com/ahmedkhaleda998/todo.git
- cd todo
- Install the dependencies: npm install
- Build the TypeScript code: tsc
- Start the server: node dist/app.js
- Open your web browser and navigate to http://localhost:3000 to access the Todo application.

## Endpoints

The following API endpoints are available:

- `GET /todos`: Get a list of all todos.
- `GET /todos/:id`: Get details of a specific todo.
- `POST /todos`: Create a new todo.
- `PUT /todos/:id`: Update an existing todo.
- `DELETE /todos/:id`: Delete a todo.

## Project Structure

The project structure is organized as follows:

- `src/`: Contains the TypeScript source code.
  - `controllers/`: Controllers handling the route logic.
  - `routes/`: Express route definitions.
  - `models/`: TypeScript interfaces for data models.
  - `app.ts`: Main application file where Express is configured.
- `dist/`: Compiled JavaScript files (generated after running `npm run build`).
- `package.json`: Project configuration and dependencies.
- `tsconfig.json`: TypeScript compiler configuration.
- `README.md`: Project documentation (you're reading it!).

## Contributing

Happy coding! If you have any questions or need assistance, feel free to open an issue or contact us at ahmedkhaleda998877@gmail.com