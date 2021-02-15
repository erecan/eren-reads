const express = require('express');
const router = express.Router();

//API
router.get('/', (req, res) => {
    res.render('api');
})

//Login
router.get('/login', (req, res) => {
    res.render('login');
})

//Logout
router.get('/logout', (req, res) => {
    res.render('logout');
})

module.exports = router;