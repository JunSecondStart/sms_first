CREATE TABLE users (
    id INTEGER PRIMARY KEY,         -- Automatically generates a unique ID for each user
    username VARCHAR(50) NOT NULL, -- Username column, max 50 characters, required
    phone_number VARCHAR(50) UNIQUE NULL, -- Email column, unique, required
    password VARCHAR(50) NOT NULL,     -- Password column (hashed password), required
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp for account creation
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Timestamp for account creation
);