# Online_chat_socket.io

# Real-Time Chat Application

A full-stack real-time chat application built with **Node.js**, **Socket.io**, and **MongoDB**. This project demonstrates real-time bidirectional communication, data persistence, and a clean modular architecture.

## Features

- **Real-Time Messaging:** Instant message delivery using WebSockets (Socket.io).
- **Persistent Storage:** All messages are saved in MongoDB and retrieved on page load.
- **Chat History:** The app automatically fetches the last 50 messages from the database via a REST API.
- **Responsive UI:** Simple and clean interface built with Vanilla JS and CSS.
- **Data Validation:** Server-side validation for message length and user inputs.
- **Modular Codebase:** Organized into separate folders for models, configuration, and socket logic.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Real-Time:** Socket.io
- **Frontend:** HTML5, CSS3, Vanilla JavaScript

## Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
    cd your-repo-name
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Configuration:**
    Create a `.env` file in the root directory and add your credentials:

    ```env
    PORT=3000
    MONGO_URL=your_mongodb_connection_string
    CLIENT_URL=http://localhost:3000
    ```

4.  **Run the application:**

    ```bash
    # For development
    npm run dev

    # For production
    npm start
    ```

    Access the app at `http://localhost:3000`.

## Project Structure

- `app.js` — Main entry point and Express configuration.
- `/config` — Database connection setup.
- `/models` — Mongoose schemas (Message model).
- `/socket` — Socket.io event handlers.
- `/public` — Frontend assets (HTML, CSS, Client JS).

---

Developed as a showcase of Fullstack JavaScript capabilities.
