import React from 'react';
// import {useLocation} from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import CreateTicket from './components/pages/employer/CreateTicket';
import Home from './components/pages/technicien/Home';
import AllTickets from './components/pages/admin/AllTickets';
import Dashboard from './components/pages/admin/Dashboard';
import Employers from './components/pages/admin/Employers';
import MyTickets from './components/pages/employer/MyTickets';
import Assign from './components/pages/admin/Assign'



const Routes = () => {
    
    
    const { isAuthenticated, type } = useSelector(state => state.authentification)
    console.log({ isAuthenticated, type })
    // console.log({ role, isAuthenticated })
    return (

 
        <Switch>
            <AuthRoute path="/" exact type={type} auth={isAuthenticated} component={Login} />
            <TechRoute path="/home" type={type} auth={isAuthenticated} component={Home} />
            <AdminRoute path="/dashboard" type={type} auth={isAuthenticated} component={Dashboard} />
            <AdminRoute path="/register" type={type} auth={isAuthenticated} component={Register} />
            <AdminRoute path="/employers" type={type} auth={isAuthenticated} component={Employers} />
            <AdminRoute path="/tickets" type={type} auth={isAuthenticated} component={AllTickets} />
            <AdminRoute path="/ticket/:id" type={type} auth={isAuthenticated} component={Assign} />
            <EmployerRoute path="/myTickets"  type={type} auth={isAuthenticated} component={MyTickets} />
            <EmployerRoute path='/addTicket' type={type} auth={isAuthenticated} component={CreateTicket} />
        </Switch>
     

    )
}


const AdminRoute = ({ path, component: Component, type, auth, ...rest }) => {
 
    return (
        (
            <Route
                {...rest}
                render={(props) => (auth && type === 'admin' ? <Component /> : <Redirect to="/" />)}
            />
        )
    )
}

const EmployerRoute = ({ path, component: Component, type, auth, ...rest }) => {

    return (
        (
            <Route
                {...rest}
                render={() => (auth && type === 'employer' ? <Component /> : <Redirect to="/" />)}
            />
        )
    )
}

const TechRoute = ({ path, component: Component, type, auth, ...rest }) => {

    return (
        (
            <Route
                {...rest}
                render={() => (auth && type === 'technicien' ? <Component /> : <Redirect to="/" />)}
            />
        )
    )
}


const AuthRoute = ({ path, component: Component, type, auth, ...rest }) => {

    return(
        
            <Route
                {...rest}
                render={() => (!auth ? <Component />
                    : (type === 'employer')
                    ? (<Redirect to="/myTickets" />)
                    : (type === 'admin')
                    ? (<Redirect to="/dashboard" />)
                    : (<Redirect to="/home" />)
                    )}
            />
    )
}



export default Routes
