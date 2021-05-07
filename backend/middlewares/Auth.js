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

}