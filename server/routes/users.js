const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    User
        .find()
        .then(users => {
            res.status(200).json(users);
        });
});

router.get('/api/users/:id', (req, res) => {
    User
        .findById(req.params)
        .then(users => {
            if (users === null) res.status(404).end()
            else res.status(200).json(users);
        });
});

router.post('/api/users/', (req, res) => {
    const newUser = new User(req.body);
    newUser
        .save()
        .then(users => {
            res.status(201).json(users);
        });
});

router.put('/api/users/:id', (req, res) => {
    User
        .findByIdAndUpdate(req.params)
        .then(users => {
            if (users === null) res.status(404).end()
            else res.status(204).json(users);
        });
});

router.delete('/api/users/:id', (req, res) => {
    User
        .findByIdAndRemove(req.params)
        .then(users => {
            if (user === null) res.status(400).end()
            else res.status(200).json(users);
        });
});

module.exports = router;

