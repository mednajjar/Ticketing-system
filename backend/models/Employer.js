const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const employerSchema = Schema({
    nom_et_prenom: {type: String, min:6, max: 100, require: true},
    email: {type: String, require: true},
    type: {type: String, ennum: ['employer', 'admin', 'technicien'], default: 'employer'},
    password: {type: String, min:6, require: true},
    id_departement: {type: Schema.Types.ObjectId, ref: 'Departement'},
})

module.exports = model('Employer', employerSchema)