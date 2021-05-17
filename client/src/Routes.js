import React from 'react';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import CreateTicket from './components/pages/employer/CreateTicket';
import Home from './components/pages/technicien/Home';
import AllTickets from './components/pages/admin/AllTickets';
import Dashboard from './components/pages/admin/Dashboard';
import Employers from './components/pages/admin/Employers';
import MyTickets from './components/pages/employer/MyTickets';
import Assign from './components/pages/admin/Assign';
import Ticket from './components/pages/technicien/Tickets';



const Routes = () => {


    const { isAuthenticated, type } = useSelector(state => state.authentification)
    console.log({ isAuthenticated, type })
    // console.log({ role, isAuthenticated })
    return (


        <Switch>
            <AuthRoute path="/" exact type={type} auth={isAuthenticated} component={Login} />
            <AdminRoute path="/dashboard" exact type={type} auth={isAuthenticated} component={Dashboard} />
            <AdminRoute path="/register" type={type} auth={isAuthenticated} component={Register} />
            <AdminRoute path="/employers" type={type} auth={isAuthenticated} component={Employers} />
            <AdminRoute path="/tickets" type={type} auth={isAuthenticated} component={AllTickets} />
            <AdminRoute path="/ticket/:id" type={type} auth={isAuthenticated} component={Assign} />
            <TechRoute path="/home" exact type={type} auth={isAuthenticated} component={Home} />
            <TechRoute path="/home/:id" type={type} auth={isAuthenticated} component={Ticket} />
            <EmployerRoute path="/myTickets" type={type} auth={isAuthenticated} component={MyTickets} />
            <EmployerRoute path='/addTicket' type={type} auth={isAuthenticated} component={CreateTicket} />
        </Switch>


    )
}



const AdminRoute = ({ path, component: Component, type, auth, ...rest }) => {

    return (

        <Route
            {...rest}
            render={(props) => {
                if (auth && type === 'admin') {

                    return (<Component />)
                } else {

                    return (<Redirect to={{pathname: "/", state: { adminPath: path }}} />)
                }
            }}

        />

    );
};

const EmployerRoute = ({ path, component: Component, type, auth, ...rest }) => {

    return (
        (
            <Route
                {...rest}
                render={() => auth && type === 'employer' ? (<Component />) : (<Redirect to={{pathname: "/", state: { employerPath: path }}} />)}
            />
        )
    )
}

const TechRoute = ({ path, component: Component, type, auth, ...rest }) => {

    return (
        (
            <Route
                {...rest}
                render={() => auth && type === 'technicien' ? (<Component />) : (<Redirect to={{pathname: "/", state: { technicienPath: path }}} />)}
            />
        )
    )
}


const AuthRoute = ({ path, component: Component, type, auth, ...rest }) => {
    const location  = useLocation()
console.log(location)
    return (

        <Route
            {...rest}
            render={() =>
                !auth ? (<Component />) :
                    type === 'admin' ? (<Redirect to={location.state?.adminPath || '/dashboard'} />) :
                        type === 'employer' ? (<Redirect to={ location.state?.employerPath || '/myTickets'} />) :
                            (<Redirect to={ location.state?.technicienPath ||'/home'} />)

            }
        />
    )
}




export default Routes
