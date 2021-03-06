import React from 'react';
import { useSelector } from 'react-redux';
import { getLogout } from '../../redux/slices/authSlice';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const { isAuthenticated, type } = useSelector(state => state.authentification)
    console.log({ isAuthenticated, type })
  
   const dispatch = useDispatch();
   const history = useHistory();
    const logout = async () => {
        dispatch(getLogout())
        history.push('/')
    }
    return (
     <>
     {
         isAuthenticated && (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white">
            <div className="container">
           
                <a href="//#region " className="navbar-brand text-white">Gestion des incidents</a>
               
                <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav col-6">
                     
                        <li className="nav-item" style={display(type, 'employer')}>
                            <Link to="/myTickets" className="nav-link active text-white" aria-current="page" >My tickets</Link>
                        </li>                        
                        <li className="nav-item" style={display(type, 'employer')}>
                            <Link to="/addTicket" className="nav-link active text-white" aria-current="page" >Create Ticket</Link> 
                        </li>
                                   
                        <li className="nav-item" style={display(type, 'technicien')}>
                            <Link to="/home" className="nav-link active text-white" aria-current="page" >Home</Link>
                        </li>                           

                        <li className="nav-item" style={display(type, 'admin')}>
                            <Link to="/dashboard" className="nav-link active text-white" aria-current="page" >Dashboard</Link>
                        </li>                        
                        <li className="nav-item" style={display(type, 'admin')}>
                            <Link to="/register" className="nav-link active text-white" aria-current="page" >Register</Link> 
                        </li>
                        <li className="nav-item" style={display(type, 'admin')}>
                            <Link to="/tickets" className="nav-link active text-white" aria-current="page" >Tickets</Link> 
                        </li>

                    </ul>
                    <ul className="navbar-nav col-6 justify-content-end ">
                        <li className="nav-item">
                       
                            <Link to="/" className="nav-link" onClick={logout}>
                            
                                <button className="btn btn-warning">

                                    Logout
                                </button>
                            </Link>
                           
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

         )
     }
        </>
    )
}


function display(type, user){
    return({
        display: type === user.toString() ? "block" : "none"
    })
}
export default Navbar
