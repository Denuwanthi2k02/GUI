const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database/db');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Create 'users' table if it doesn't exist
db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        full_name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )
`, (err) => {
    if (err) {
        console.error('Error creating users table:', err.message);
    } else {
        console.log('Users table created or already exists.');
    }
});

//=========================================================
// Create 'movies' table if it doesn't exist
db.run(`
    CREATE TABLE IF NOT EXISTS movies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        language TEXT NOT NULL,
        about TEXT NOT NULL,
        img_url TEXT NOT NULL
    )
`, (err) => {
    if (err) {
        console.error('Error creating movies table:', err.message);
    } else {
        console.log('Movies table created or already exists.');
    }
});

//=========================================================
// Create 'bookings' table if it doesn't exist
db.run(`
    CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        movie_id INTEGER NOT NULL,
        seats TEXT NOT NULL,
        total_amount REAL NOT NULL,
        booking_date TEXT NOT NULL,
        show_time TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (movie_id) REFERENCES movies(id)
    )
`, (err) => {
    if (err) {
        console.error('Error creating bookings table:', err.message);
    } else {
        console.log('Bookings table created or already exists.');
    }
});



//===========================================================
// Signup API
app.post('/signup', (req, res) => {
    const { full_name, email, password } = req.body;

    if (!full_name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const query = `INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)`;
    db.run(query, [full_name, email, password], function (err) {
        if (err) {
            console.error('Error inserting user:', err.message);
            return res.status(500).json({ error: 'Database error.' });
        }

        res.status(201).json({ message: 'User registered successfully.', userId: this.lastID });
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


//===========================================================
// Login API (no bcrypt, plain text comparison)
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Both email and password are required.' });
    }

    // Check if email exists in the users table
    const query = `SELECT * FROM users WHERE email = ?`;
    db.get(query, [email], (err, user) => {
        if (err) {
            console.error('Error retrieving user:', err.message);
            return res.status(500).json({ error: 'Database error.' });
        }

        // If no user found, return error
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }

        // Compare the provided password with the stored (plain text) password
        if (password !== user.password) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }

        // If email and password are valid, send a success response
        res.status(200).json({ message: 'Login successful', userId: user.id });
    });
});


//====================================================
// Add movies to the database
app.post('/add-movie', (req, res) => {
    const { title, language, about, img_url } = req.body;

    if (!title || !language || !about || !img_url) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const query = `INSERT INTO movies (title, language, about, img_url) VALUES (?, ?, ?, ?)`;
    db.run(query, [title, language, about, img_url], function (err) {
        if (err) {
            console.error('Error inserting movie:', err.message);
            return res.status(500).json({ error: 'Database error.' });
        }

        res.status(201).json({ message: 'Movie added successfully.', movieId: this.lastID });
    });
});


//================================================================
// Get all movies
app.get('/movies', (req, res) => {
    const query = `SELECT * FROM movies`;
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Error fetching movies:', err.message);
            return res.status(500).json({ error: 'Database error.' });
        }
        res.status(200).json(rows);
    });
});


//==================================================================
// Add a booking
app.post('/book', (req, res) => {
    const { user_id, movie_id, seats, date, time } = req.body;
    console.log(req.body); // Debugging

    // Calculate total amount (assuming each seat costs 200)
    const total_amount = seats.split(',').length * 200;

    // Check if all required fields are provided
    if (!user_id || !movie_id || !seats || !date || !time) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const query = `
        INSERT INTO bookings (user_id, movie_id, seats, total_amount, booking_date, show_time)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    db.run(query, [user_id, movie_id, seats, total_amount, date, time], function (err) {
        if (err) {
            console.error('Error inserting booking:', err.message);
            return res.status(500).json({ error: 'Database error.' });
        }

        res.status(201).json({ message: 'Booking successful.', bookingId: this.lastID });
    });
});


//=======================================================================
// Get bookings for a specific user
app.get('/user-bookings/:userId', (req, res) => {
    const { userId } = req.params;

    const query = `
        SELECT b.id AS booking_id, b.seats, b.total_amount, b.booking_date, b.show_time, 
               m.title AS movie_title, m.language 
        FROM bookings b
        JOIN movies m ON b.movie_id = m.id
        WHERE b.user_id = ?
    `;
    db.all(query, [userId], (err, rows) => {
        if (err) {
            console.error('Error fetching bookings:', err.message);
            return res.status(500).json({ error: 'Database error.' });
        }

        res.status(200).json(rows);
    });
});


