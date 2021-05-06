const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const {date} = require('../config/config')

const assignSchema = Schema({
    id_ticket: {type: Schema.Types.ObjectId, ref: 'Ticket'},
    id_technicien: {type: Schema.Types.ObjectId, ref: 'Employer'},
    date:{type: String, default: date},
})

module.exports = model('Assign', assignSchema)