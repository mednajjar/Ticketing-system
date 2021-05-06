const express = require('express');
const route = express.Router();
const {logout, signin, signup} = require('../controllers/authController');
const {verifToken, admin} = require('../middlewares/Auth')

route.post('/login', signin);
route.post('/register',admin, verifToken, signup);
route.post('/logout', logout);


module.exports = route;