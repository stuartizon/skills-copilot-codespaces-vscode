// Create web server
var express = require('express');
var app = express();

// Create a route for comments
app.get('/comments', function(req, res) {
    res.send('This is a page for comments');
});

// Start the server
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});