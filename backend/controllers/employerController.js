const Ticket = require('../models/Ticket');
const Assign = require('../models/Assign');
const Employer = require('../models/Employer');
const { ticketValidation, departementValidation } = require('../validation/validationForms');
const Departement = require('../models/Departement');

exports.addTicket = async (req, res) => {
    const { error } = ticketValidation(req.body);
    if (error) res.status(400).json(error.details[0].message);
    try {
        const ticket = new Ticket({
            ...req.body,
            id_employer: res.auth._id,
        });
        const saveTicket = await ticket.save();
        if (saveTicket) return res.status(201).json(saveTicket)
    } catch (error) {
        throw Error(error)
    }
}

exports.getTechnicien = async (req, res) => {
    try {
        const technicien = await Employer.find({ type: 'technicien' }).select('-password');
        if (technicien) return res.status(200).json(technicien)

    } catch (error) {
        throw Error(error)
    }
}

exports.getTicket = async (req, res) => {
    try {
        const ticket = await Ticket.find();
        if (ticket.length > 0) {
            return res.status(200).json(ticket)
        } else {
            return res.status(404).json('There is no ticket')
        }
    } catch (error) {
        throw Error(error)
    }
}

exports.getEmployedTicket = async (req, res) => {
    try {
        const ticket = await Ticket.find({ id_employer: res.auth._id });
        if (ticket.length > 0) {
            return res.status(200).json(ticket)
        }else {
            return res.status(404).json('There is no ticket')
        }
    } catch (error) {
        throw Error(error)
    }
}

exports.assign = async (req, res) => {
    const technicien = await Employer.findOne({ nom_et_prenom: req.body.username })
    const findTicket = await Assign.findOne({ id_ticket: req.params.id });
    if ((findTicket.id_ticket = req.params.id) && (findTicket.id_technicien = technicien._id))
        return res.status(400).json(`ticket already assigned to ${technicien.nom_et_prenom}`)
    const assign = new Assign({
        id_ticket: req.params.id,
        id_technicien: technicien._id
    })
    const updateEtat = await Ticket.findByIdAndUpdate({ _id: req.params.id }, { etat: 'assigned' });
    const assigned = await assign.save()
    if (assigned && updateEtat) return res.status(201).json([{ assign }, { updateEtat }])

}

exports.getAssignedTicket = async (req, res) =>{
    try {
        const ticket = await Assign.find({id_technicien: res.auth._id}).populate('id_ticket');
        if(ticket.length > 0){
            return res.status(200).json(ticket)   
        }else {
            return res.status(404).json('There is no ticket')
        }
    } catch (error) {
        throw Error(error)
    }
}

exports.addDepartement = async (req, res) =>{
    const { error } = departementValidation(req.body);
    if (error) res.status(400).json(error.details[0].message);
    try {
        const departement = new Departement({
            ...req.body
        })
        const findDepartement = await Departement.findOne({nom: departement.nom})
        if(findDepartement){
            return res.status(400).json(`Departement already exist!`)
        }else{
            departement.save();
            return res.status(201).json(departement);  
        } 
    } catch (error) {
        throw Error(error)
    }
}

exports.getDepartement = async (req, res)=>{
    try {
        const departement = await Departement.find();
        if(departement) return res.status(200).json(departement)
    } catch (error) {
        throw Error(error)
    }
}
