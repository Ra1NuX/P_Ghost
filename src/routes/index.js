const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login', {tittle: 'Login'});
});

router.get('/', (req, res) => {
    res.render('index', {tittle: 'Index'});
});

module.exports = router;