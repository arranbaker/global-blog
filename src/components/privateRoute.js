import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { userId } = useAuth();

    return (
        <Route {...rest} render={props => {
            return userId !== 'guest' ? <Component {...props} /> : <Redirect to='/login' />
        }}>
        </Route>
    )
}

export default PrivateRoute;