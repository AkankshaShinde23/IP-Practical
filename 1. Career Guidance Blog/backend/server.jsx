const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Mock data for articles
const articles = [
  { title: 'How to Navigate Career Changes', summary: 'Tips for transitioning smoothly...' },
  { title: 'The Importance of Networking', summary: 'Why building connections matters...' },
  { title: 'Resume Building Strategies', summary: 'Make your resume stand out...' },
];

// GET request to fetch articles
app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// POST request to handle contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (name && email && message) {
    // In a real app, you'd store this in a database
    console.log('New inquiry:', req.body);
    res.status(200).json({ message: 'Inquiry received!' });
  } else {
    res.status(400).json({ message: 'All fields are required.' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
