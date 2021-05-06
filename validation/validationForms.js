const Joi = require('joi');

exports.registerValidation = data=>{

    const schema = Joi.object({
    nom: Joi.string().min(3).max(100).required(),
    prenom: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    type: Joi.string(),
    password: Joi.string().min(6).required(),
})
    return schema.validate(data)
}

exports.loginValidation = data=>{

    const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})
    return schema.validate(data)
}

exports.ticketValidation = data=>{

    const schema = Joi.object({
    titre: Joi.string().min(6).max(100).required(),
    type: Joi.string().min(4).max(100).required(),
    urgence: Joi.string(),
    description: Joi.string().min(10).max(1024).required(),
    etat: Joi.string(),
    
})
    return schema.validate(data)
}