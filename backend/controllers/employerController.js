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

exports.getTicketById = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if (ticket) return res.status(200).json(ticket)
    } catch (error) {
        throw Error(error)
    }
}

exports.getEmployedTicket = async (req, res) => {
    try {
        const ticket = await Ticket.find({ id_employer: res.auth._id });
        if (ticket.length > 0) {
            return res.status(200).json(ticket)
        } else {
            return res.status(404).json('There is no ticket')
        }
    } catch (error) {
        throw Error(error)
    }
}

exports.assign = async (req, res) => {
    try {
        const { nom_et_prenom } = req.body;
        console.log('req body', req.body)
        const technicien = await Employer.findOne({ nom_et_prenom })
        const findTicket = await Assign.findOne({ id_ticket: req.params.id }).populate('id_ticket');
        console.log('find ticket', findTicket)

        if (findTicket === null) {
            const assign = new Assign({
                id_ticket: req.params.id,
                id_technicien: technicien._id
            })
            const updated = await Ticket.findByIdAndUpdate({ _id: req.params.id }, { etat: 'assigned' });
            const assigned = await assign.save()
            if (assigned && updated) return res.status(201).json(assign)
        } else {
            if (findTicket.id_ticket._id == req.params.id &&
                findTicket.id_technicien == (technicien._id).toString() &&
                (findTicket.id_ticket.etat == 'assigned' || findTicket.id_ticket.etat == 're-assigned')) {
                return res.status(400).json(`ticket already assigned to ${technicien.nom_et_prenom}`)
            }
            const assign = new Assign({
                id_ticket: req.params.id,
                id_technicien: technicien._id
            })
            if (findTicket.id_ticket.etat == 'waiting') {
                await Ticket.findByIdAndUpdate({ _id: req.params.id }, { etat: 'assigned' });

            }
            if (findTicket.id_ticket.etat == 're-waiting') {
                await Ticket.findByIdAndUpdate({ _id: req.params.id }, { etat: 're-assigned' });
            }
            const assigned = await assign.save()
            if (assigned) return res.status(201).json(assign)
        }
    } catch (error) {
        throw Error(error)
    }

}

exports.cancelTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findOne({ _id: req.params.id });
        if (!ticket) return res.status(404).json('Ticket not found');
        const assign = new Assign({
            id_ticket: req.params.id,
            id_technicien: res.auth._id
        })
        const updateEtat = await Ticket.findByIdAndUpdate({ _id: req.params.id }, { etat: 're-waiting' });
        const assigned = await assign.save()
        if (assigned && updateEtat) return res.status(201).json([{ assign }, { updateEtat }])
    } catch (error) {
        throw Error(error)
    }
}

exports.resolved = async (req, res) => {
    try {
        const ticket = await Ticket.findOne({ _id: req.params.id });
        if (!ticket) return res.status(404).json('Ticket not found');
        const assign = new Assign({
            id_ticket: req.params.id,
            id_technicien: res.auth._id
        })
        const updateEtat = await Ticket.findByIdAndUpdate({ _id: req.params.id }, { etat: 'resolved' });
        const assigned = await assign.save()
        if (assigned && updateEtat) return res.status(201).json([{ assign }, { updateEtat }])
    } catch (error) {
        throw Error(error)
    }
}

exports.getAssignedTicket = async (req, res) => {
    try {
        const ticket = await Assign.find({ id_technicien: res.auth._id }).populate('id_ticket').select('').limit(1);
        if (ticket.length > 0) {
            return res.status(200).json(ticket)
        } else {
            return res.status(404).json('There is no ticket')
        }
    } catch (error) {
        throw Error(error)
    }
}

exports.addDepartement = async (req, res) => {
    const { error } = departementValidation(req.body);
    if (error) res.status(400).json(error.details[0].message);
    try {
        const departement = new Departement({
            ...req.body
        })
        const findDepartement = await Departement.findOne({ nom: departement.nom })
        if (findDepartement) {
            return res.status(400).json(`Departement already exist!`)
        } else {
            departement.save();
            return res.status(201).json(departement);
        }
    } catch (error) {
        throw Error(error)
    }
}

exports.getDepartement = async (req, res) => {
    try {
        const departement = await Departement.find();
        if (departement) return res.status(200).json(departement)
    } catch (error) {
        throw Error(error)
    }
}
