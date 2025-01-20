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
    const { title, language, about, imgSrc } = req.body;

    if (!title || !language || !about || !imgSrc) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const query = `INSERT INTO movies (title, language, about, img_url) VALUES (?, ?, ?, ?)`;
    db.run(query, [title, language, about, imgSrc], function (err) {
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
