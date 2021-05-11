import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {getMyTicket} from '../../../redux/slices/ticketSlice';

const MyTickets = () => {
    const {myTicket} = useSelector((state)=>state.allTickets)
    const dispatch = useDispatch();
    

    useEffect(()=>{
        dispatch(getMyTicket())
    }, [dispatch])
    return (
        <div className="container mt-5">
            <h1 className="text-center">All my tickets</h1>
            <div className="flex-lg-row">
            {
                (myTicket.length > 0) && myTicket.map((res, index)=>(
                    <>
                        <div className="card border-success m-3" key={index}>
                            <div className="card-header bg-transparent border-success d-flex justify-content-between">
                                <div>{res.etat}</div> 
                                <div>{res.date}</div>
                            </div>
                            <div className="card-body text-success">
                                <h5 className="card-title">{res.titre}</h5>
                                <p className="card-text">{res.description}</p> 
                            </div>
                        </div>
                    </>
                ))
            }
            </div>
            
            
        </div>
    )
}

export default MyTickets
