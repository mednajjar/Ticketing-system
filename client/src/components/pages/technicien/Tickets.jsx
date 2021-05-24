import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { resolvedTicket,getTechTicketById, cancelTicket } from '../../../redux/slices/ticketSlice';

const Tickets = () => {
    const { id } = useParams();
    const { assignTicket } = useSelector((state) => state.allTickets);
    console.log('ticket', assignTicket)
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getTechTicketById(id));
    }, [dispatch, id])

    const cancelSelectedTicket = (e) =>{
        e.preventDefault()
        dispatch(cancelTicket(id))
        history.push('/home')
    }

    const resolvedticket = (e) =>{
        e.preventDefault();
        dispatch(resolvedTicket(id))
        history.push('/home')
    }
    return (
        <div className="container mt-5">
            <h1 className="text-center">Ticket details</h1>
            <div className="container mt-5">
                {
                    assignTicket && (
                        <>
                            <h3 className="text-center">{assignTicket.etat} Tickets</h3>
                            <div className="flex-lg-row">
                                <div className="card border-success m-3" key={1}>
                                    <div className="card-header bg-transparent border-success d-flex justify-content-between">
                                        <div>{assignTicket.etat}</div>
                                        <div>{assignTicket.date}</div>
                                    </div>
                                    <div className="card-body text-success">
                                        <h5 className="card-title">{assignTicket.titre}</h5>
                                        <p>Urgence: {assignTicket.urgence}</p>
                                        <p>Type: {assignTicket.type}</p>
                                        <p className="card-text">{assignTicket.description}</p>
                                    </div>
                                    <div className="d-flex justify-content-between card-footer bg-transparent border-success">
                                        <button className="btn btn-secondary" type="submit" onClick={resolvedticket}>
                                            Resolver
                                        </button>
                                        <button className="btn btn-warning " type="submit" onClick={cancelSelectedTicket}>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Tickets
