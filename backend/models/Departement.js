const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const departementScheme = Schema({
    nom: {type: String, min:3, max: 100, require: true},
    responsable: {type: String, min:3, max: 100, require: true}
})

module.exports = model('Departement', departementScheme)