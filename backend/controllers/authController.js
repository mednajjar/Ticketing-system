const Employer = require('../models/Employer');
const { loginValidation, registerValidation } = require('../validation/validationForms');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Departement = require('../models/Departement');


exports.signup = async (req, res) => {
    // check validaton
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).json({ err: error.details[0].message, ...req.body });

    const { email, password, departement } = req.body;
    const hashPassword = await bcrypt.hash(password, 12);
    const findDepartement = await Departement.findOne({nom: departement})
    const ifEmailExist = await Employer.findOne({ email });
    if (ifEmailExist) return res.status(400).json('email already exist!');
    const employer = new Employer({
        ...req.body,
        id_departement: findDepartement._id
    })
    employer.password = hashPassword;
    try {
        const saved = await employer.save();
        if (saved) return res.status(201).json(`${employer.type} created succefully`);
    } catch (error) {
        return res.status(500).json('Error server!')
    }
}

exports.signin = async (req, res) => {
    const { email, password } = req.body;
    // check validaton
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).json({ err: error.details[0].message });

    try {
        // check email user
        const checkUser = await Employer.findOne({ email });
        if (!checkUser) return res.status(400).json({ err: 'Invalid email or password' });
        // compare password user
        const match = await bcrypt.compare(password, checkUser.password);
        if (!match) return res.status(400).json({ err: 'Invalid email or password' });
        const token = jwt.sign({ id: checkUser._id, type: checkUser.type }, process.env.TOKEN_SECRET, { expiresIn: process.env.EXPIRATION_IN });
        return res.status(200).cookie('auth_token', token, { maxAge: process.env.EXPIRATION_IN, httpOnly: true }).json({ type: checkUser.type, isAuthenticated: true });
    } catch (err) {
        res.status(400).json({ error: 'bad request' });
    }
}

exports.logout = (req, res) => {
    res.status(200).clearCookie('auth_tokn')
        .json({ type: null, isAuthenticated: false })
}