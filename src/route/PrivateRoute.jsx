import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = props => {
    const auth = localStorage.getItem('auth');
    console.log(typeof auth)

    return (
        auth ? <Route exact path={props.path} component={props.component} /> : <Redirect to="/counter"/> 
    )
}

export default PrivateRoute