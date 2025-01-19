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
