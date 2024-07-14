# Task Management Backend

## Overview

This is the backend application for the Task Management system. It provides RESTful APIs for managing tasks, including user authentication, task creation, retrieval, updating, and deletion. The backend is built using Node.js, Express, and MongoDB.

## Features

- User Authentication (JWT-based)
- Task Creation
- Task Retrieval (Single and All)
- Task Updating
- Task Deletion

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js](https://nodejs.org/)
- You have installed [MongoDB](https://www.mongodb.com/try/download/community) and it is running on your local machine or you have access to a MongoDB database
- You have set up the [frontend application](frontend link from github)

## Getting Started

To set up the backend locally, follow these steps:

1. **Clone the repository**

    ```bash
    add backend repository link
    cd task-management-backend
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory and add your environment variables**

    ```env
    PORT=5007
    MONGODB_URI=mongodb://localhost:27017/taskmanagement
    JWT_SECRET_KEY=your_jwt_secret_key
    ```

4. **Run the application**

    ```bash
    node server.js
    ```

    The backend server will be available at `http://localhost:5007`.

## API Endpoints

### Authentication

- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Log in a user

### Tasks

- **GET /api/tasks**: Get all tasks for the logged-in user
- **POST /api/task**: Create a new task
- **GET /api/task/:id**: Get a single task by ID
- **PUT /api/task/:id**: Update a task by ID
- **DELETE /api/task/:id**: Delete a task by ID

## Middleware

- **authMiddleware**: Middleware to verify JWT and authenticate users
- **checkTaskOwnership**: Middleware to check if the logged-in user owns the task they are trying to access


## Contact

If you have any questions or suggestions, feel free to reach out:

- Email: nehalas965@gmail.com
- GitHub: [Neha-200](https://github.com/Neha-200)
