const jwt = require('jsonwebtoken');
const Employer = require('../models/Employer')

exports.verifToken = (role) => (req, res, next) => {
    const token = req.cookies.auth_token;
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
            if (!err && decodedToken.type === role) {
                res.auth = await Employer.findOne({ _id: decodedToken.id }).select('-password');
                next();
            } else {
                return res.status(404).clearCookie('auth_token')
                    .json({ Warning: 'You are not authorized' });
            }
        })
    }else{
        return res.status(400).json({type: null, isAuthenticated: false })
    }
}


exports.isAuth = (req, res) => {
    const token = req.cookies['auth_token'];
    if (token) {
        // console.log(token)
        jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
            if (err) {
                console.log('error')
                return res.clearCookie('auth_token').json({ type: null, isAuthenticated: false });
            } else {
                return res
                    .status(200)
                    .json({ type: decodedToken.type, isAuthenticated: true });
            }
        });

    } else {
        console.log('notToken')
        return res.json({ role: null, isAuthenticated: false });
    }
}