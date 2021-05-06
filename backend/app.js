require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {db} = require('./config/config')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const Fawn = require('fawn');
const {isAuth} = require('./middlewares/isAuth')

/**
 * @params (connection database)
 */
db(mongoose)

/**
 * @params (middleswares)
 */

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

/**
 * @params (enable fawn on mongoose)
 */
Fawn.init(mongoose)

/**
 * @params (all routes)
 */


/**
 * @params (check authentication for all routes)
 */
app.use('*', isAuth, (req, res, next)=>{
    next();
});
module.exports = app