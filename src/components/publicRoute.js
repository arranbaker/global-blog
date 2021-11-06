import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const PublicRoute = ({ component: Component, ...rest }) => {

    const { userId } = useAuth();

    return (
        <Route {...rest} render={props => {
            return userId !== 'guest' ? <Redirect to='/' /> : <Component {...props} />
        }}>
        </Route>
    )
}

export default PublicRoute;