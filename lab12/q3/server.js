const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/testDB')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));
const UserSchema = new mongoose.Schema({
    name: String
});
const User = mongoose.model('User', UserSchema);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.post('/add', async (req, res) => {
    await User.create(req.body);
    res.send('Data inserted');
});
app.get('/get', async (req, res) => {
    const data = await User.find();
    res.json(data);
});
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});