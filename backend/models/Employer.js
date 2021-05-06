const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const employerSchema = Schema({
    nom: {type: String, min:3, max: 100, require: true},
    prenom: {type: String, min:3, max: 100, require: true},
    email: {type: String, require: true},
    type: {type: String, ennum: ['employer', 'admin', 'technicien'], default: 'employer'},
    password: {type: String, require: true},
    id_departement: {type: Schema.Types.ObjectId, ref: 'Departement'},
})

module.exports = model('Employer', employerSchema)