import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {techTicket} from '../../../redux/slices/ticketSlice';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch()
    const {myTicket} = useSelector((state)=>state.allTickets)
    console.log('test',myTicket)
    const history = useHistory();

    useEffect(()=>{
        dispatch(techTicket())
    }, [dispatch])


    const getId = (id)=>(e)=>{
        e.preventDefault()
        history.push(`/home/${id}`)
    }
    return (
        <div className="container mt-5">
            <h1 className="text-center">Assigned Tickets</h1>
            <div className="flex-lg-row">
            {
                (myTicket.length !== 0) ? myTicket.map((res, index)=> (
                
                    res.id_ticket.etat !== null && (res.id_ticket.etat === 'assigned' || res.id_ticket.etat === 're-assigned' || res.id_ticket.etat === 'resolved') && (
                        <>
                            <div className="card border-success m-3" key={index}>
                                <div className="card-header bg-transparent border-success d-flex justify-content-between">
                                    <div>{res.id_ticket.etat}</div> 
                                    <div>{res.id_ticket.date}</div>
                                </div>
                                <div className="card-body text-success">
                                    <h5 className="card-title">{res.id_ticket.titre}</h5>
                                    <p className="card-text">{res.id_ticket.description}</p> 
                                </div>
                                <div className="d-flex justify-content-between card-footer bg-transparent border-success">
                            {
                                (res.id_ticket.etat === 'assigned' || res.id_ticket.etat === 're-assigned') ? (
                                   
                                    <button className="btn btn-secondary" type="submit" onClick={getId(res.id_ticket._id)}>
                                        Show
                                    </button> 
                                  
                                ) :  <p>No action</p>
                            }
                                </div>
                            </div>
                        </>

                    )
                
                   
                )) : <p className="text-center mt-5 text-danger" >There is no ticket yet</p>
            }
            </div>
        </div>
    )
}

export default Home
