const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors())

// Define Routes
app.use('/api/github', require('./routes/api/github'));
app.use('/api/vote', require('./routes/api/vote'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
