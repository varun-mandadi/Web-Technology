const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
let users = [];
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/users', (req, res) => {
    res.json(users);
});
app.post('/users', (req, res) => {
    users.push(req.body);
    res.send('User added');
});
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});