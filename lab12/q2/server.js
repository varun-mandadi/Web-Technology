const express = require('express');
const path = require('path');
const app = express();
app.use((req, res, next) => {
    console.log(`Method: ${req.method}, URL: ${req.url}`);
    next();
});
const checkAuth = (req, res, next) => {
    console.log('Auth Middleware');
    next();
};
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/about', checkAuth, (req, res) => {
    res.send('Middleware executed successfully');
});
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});