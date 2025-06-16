const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve all files from root
app.use(express.static(__dirname));

// Routes for all pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/media', (req, res) => res.sendFile(path.join(__dirname, 'media.html')));
app.get('/mind', (req, res) => res.sendFile(path.join(__dirname, 'mind.html')));
app.get('/buddhism', (req, res) => res.sendFile(path.join(__dirname, 'buddhism.html')));

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));