import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import { useHistory } from 'react-router-dom';
import {getTicket} from '../../../redux/slices/ticketSlice'
import Assign from './Assign';

const AllTickets = () => {
    const {ticket} = useSelector((state)=>state.allTickets)
    console.log(ticket)
    const dispatch = useDispatch();
    // const history = useHistory();

    useEffect(()=>{
        dispatch(getTicket())
    }, [dispatch])
    return (
        <div className="container mt-5">
            <h1 className="text-center">all tickets</h1>
            <div className="d-md-inline-flex mt-5">
            {
                ticket && ticket.map((res)=>(
                    <>
                <div className="card border-success mb-3 w-auto  m-3" key={res._id}>
                <div className="card-header bg-transparent border-success d-flex justify-content-between">
                   <div>{res.etat}</div> 
                    <div>{res.date}</div>
                    </div>
                <div className="card-body text-success">
                    <h5 className="card-title">{res.titre}</h5>
                    <p className="card-text">{res.description}</p>
                    
                </div>
                <div className="card-footer bg-transparent border-success">
                    {
                        res.etat === 'waiting' ? (
                            <>
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                assign
                            </button>
                            <Assign id={res._id} />
                            </>

                        ) : res.etat === 're-waiting' ? (
                            <>
                            <button className="btn btn-primary">
                                re-assign
                            </button>
                            <Assign id={res._id} />
                            </>
                        ) : <p>No action</p>
                    }
                </div>
                </div>
                    </>
                ))
            }
            </div>
            
            
            
            
        </div>
    )
}

export default AllTickets
