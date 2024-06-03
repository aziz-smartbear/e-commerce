const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// Dummy user data
const users = [
  { username: 'user1', password: '$2b$10$Kk9WX8Ks5Fy0YNQC9Ql1Uu4Tz/Tz6N6rXdWjbVXKnVFZiQdGG' }, // password: 'password'
  { username: 'user2', password: '$2b$10$Kk9WX8Ks5Fy0YNQC9Ql1Uu4Tz/Tz6N6rXdWjbVXKnVFZiQdGG' }, // password: 'password'
];

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user with the given username
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // Verify the password
  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err || !isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate a JSON Web Token
    const token = jwt.sign({ username: user.username }, 'your_secret_key', { expiresIn: '1h' });

    res.json({ token });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});