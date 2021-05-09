require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {db} = require('./config/config')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const Fawn = require('fawn');
const {isAuth} = require('./middlewares/Auth');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan')
const authRoute = require('./routes/authRoute');
const employerRoute = require('./routes/employerRoute');
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
    origin: 'http://localhost:3001'
}))

/**
 * @params (enable fawn on mongoose)
 */
Fawn.init(mongoose)

/**
 * @params (create log file)
 */
const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    {
      flags: 'a',
    }
  );

  /**
   * @params (keep trace on log file with morgan)
   */
app.get('env') === 'devlopement' &&
    app.use(morgan('combined', { stream: accessLogStream }));

/**
 * @params (all routes)
 */
app.use('/api/', authRoute)
app.use('/api/', employerRoute)

/**
 * @params (check authentication for all routes)
 */
app.use('*', isAuth, (req, res, next)=>{
    next();
});
module.exports = app