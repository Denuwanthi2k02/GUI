# Film Ticket Booking Application 🎟️

## Overview

The Film Ticket Booking system consists of both a web and a desktop application. The web application allows users to browse movies and book tickets, while the desktop application is designed for administrators to manage movie listings. Both applications share the same SQLite database for seamless integration.

## Features

### Web Application 🌐

- **User Authentication**: Users can sign up and log in.
- **Movie Listings**: View released and upcoming movies.
- **Ticket Booking**: Users can select seats and book tickets (only after logging in).
- **Secure Database**: Uses SQLite for storing user and movie data.
- **Lazy Loading**: Uses React's `lazy` and `Suspense` for optimized component loading.
- **State Management**: Manages authentication state using `useState`.

### Desktop Application 💻

- **Administrator Access**: Only admins can log in.
- **CRUD Operations**: Admins can create, update, delete, and manage movie listings (both released and upcoming movies).
- **Shared Database**: Uses the same SQLite database as the web application for consistency.

## Installation 📥

To use this system, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/Denuwanthi2k02/GUI.git
   ```
2. Install dependencies for the web application:
   ```sh
   cd film-ticket-booking/web
   npm install
   ```
3. Start the web server:
   ```sh
   npm start
   ```
4. Run the desktop application (built with WPF in Visual Studio).

## API Endpoint 🌍

The web application interacts with the backend through the following endpoint:

```
http://localhost:5000/signup
```

The request body includes:

```json
{
  "full_name": "User Name",
  "email": "user@example.com",
  "password": "securepassword"
}
```

### Response Format

- **Success (201 Created)**
  ```json
  {
    "message": "Signup successful!",
    "userId": "12345"
  }
  ```
- **Error (400/500)**
  ```json
  {
    "error": "Email already exists"
  }
  ```

## Dependencies 🛠️

- `react`
- `react-router-dom`
- `sqlite3`
- `express` (for backend if applicable)
- `react-scripts`

## Customization 🎨

- Modify the API endpoint URL if needed.
- Customize styles in `Signup.css`.
- Enhance form validation for better user experience.

## License 📜

This project is licensed under the MIT License.


