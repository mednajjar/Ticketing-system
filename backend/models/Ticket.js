const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const {date} = require('../config/config')


const ticketSchema = Schema({
    titre: {type: String, min:3, max: 100, require: true},
    type: {type: String, min:3, max: 100, require: true},
    urgence: {type: String, ennum: ['normal', 'moyenne', 'urgent'], default: 'ticket'},
    description: {type: String, min:10, max: 1024, require: true},
    etat: {type: String, ennum:['waiting', 'assigned', 'reassiggned', 'resolved']},
    date:{type: String, default: date},
    id_employer: {type: Schema.Types.ObjectId, ref: 'Employer'},
})

module.exports = model('Ticket', ticketSchema)