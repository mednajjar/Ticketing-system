const express = require('express');
const route = express.Router();
const {addTicket,
     getTechnicien, 
     getTicket, 
     getEmployedTicket, 
     assign,
    getAssignedTicket,
    addDepartement} = require('../controllers/employerController');
const {verifToken} = require('../middlewares/Auth')

route.post('/addTicket', verifToken('employer'), addTicket);
route.get('/myticket', verifToken('employer'), getEmployedTicket)
route.get('/tech', verifToken('admin'), getTechnicien)
route.get('/ticket', verifToken('admin'), getTicket)
route.post('/assign/:id', verifToken('admin'), assign)
route.post('/addDepartement',  verifToken('admin'), addDepartement)
route.get('/techticket', verifToken('technicien'), getAssignedTicket)


module.exports = route;