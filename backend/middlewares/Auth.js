const jwt = require('jsonwebtoken');
const Employer = require('../models/Employer')

exports.employer = (req, res, next)=>{
res.type = 'employer';
next()
}
exports.admin = (req, res, next)=>{
res.type = 'admin';
next()
}
exports.technicien = (req, res, next)=>{
res.type = 'technicien';
next()
}
exports.verifToken = (req, res, next) => {
    const token = req.cookies.auth_token;
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
            if (!err && decodedToken.type === res.type) {
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