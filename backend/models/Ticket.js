const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const d = new Date();
let month = d.getMonth() + 1;
if (month < 10) month = `0${month}`;
let day = d.getDate();
if (day < 10) day = `0${day}`;
const dt = `${d.getFullYear()}-${month}-${day}`;  

const ticketSchema = Schema({
    titre: {type: String, min:6, max: 100, require: true},
    type: {type: String, min:4, max: 100, require: true},
    urgence: {type: String, ennum: ['normal', 'moyenne', 'urgent'], default: 'normal'},
    description: {type: String, min:10, max: 1024, require: true},
    etat: {type: String, ennum:['waiting', 'assigned', 'reassiggned', 'resolved'], default: 'waiting'},
    date:{type: String, default: dt},
    id_employer: {type: Schema.Types.ObjectId, ref: 'Employer'},
},
{timestamps: true})

module.exports = model('Ticket', ticketSchema)