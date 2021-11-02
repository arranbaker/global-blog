import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { activeUser } = useAuth();

    return (
        <Route {...rest} render={props => {
            return activeUser ? <Component {...props} /> : <Redirect to='/login' />
        }}>
        </Route>
    )
}

export default PrivateRoute;