import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {techTicket} from '../../../redux/slices/ticketSlice'
const Home = () => {
    const dispatch = useDispatch()
    const {myTicket} = useSelector((state)=>state.allTickets)
    console.log('test',myTicket)
    useEffect(()=>{
        dispatch(techTicket())
    }, [dispatch])
    return (
        <div className="container mt-5">
            <h1 className="text-center">Assigned Tickets</h1>
            <div className="flex-lg-row">
            {
                (myTicket.length > 0) && myTicket.map((res, index)=>(
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
                            res.id_ticket.etat === 'waiting' || res.id_ticket.etat === 're-waiting' ? (
                                <>  
                                <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Resolver
                                </button> 
                                <button className="btn btn-warning " data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Cancel
                                </button> 
                                </>

                            ) :  <p>No action</p>
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

export default Home
