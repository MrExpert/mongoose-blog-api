const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost/my-blog', { useNewUrlParser: true }, {useFindAndModify: false});

mongoose.Promise = Promise;

app.use(bodyParse.json());
app.use('/api/users', require('./routes/users'));
app.use('/api/blogs', require('./routes/blogs'));

app.get('/', (req, res)=>{
    res.status(200).send();
});

module.exports = app;