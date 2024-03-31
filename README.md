# Inshorts Clone

This project is a clone of the Inshorts news application built using React.js for the frontend, Node.js with Express.js for the backend, and MongoDB as the database.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Inshorts Clone project aims to replicate the core functionality of the popular news application Inshorts. It provides a simplified and concise way to read news articles by summarizing them into bite-sized pieces.

## Features

- User authentication: Users can sign up, log in, and log out.
- Browse news: Users can browse news articles from various categories.
- Read news: Users can click on news articles to read the full story.
- Like and share news: Users can like and share news articles.
- Admin panel: Admins can manage news articles, categories, and users.

## Installation

### Prerequisites

- Node.js installed on your machine
- MongoDB installed locally or accessible remotely
- Git for cloning the repository (optional)

### Steps

1. **Navigate to the project directory:**

    ```bash
    cd inshorts-clone
    ```

2. **Install dependencies for both frontend and backend:**

    ```bash
    cd frontend
    npm install

    cd ../backend
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the `backend` directory and add the following variables:

    ```makefile
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. **Start the backend server:**

    ```bash
    cd ../backend
    npm start
    ```

5. **Start the frontend development server:**

    ```bash
    cd ../frontend
    npm start
    ```

6. **Access the application in your browser:**

    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
