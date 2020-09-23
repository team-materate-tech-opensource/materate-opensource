import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./lib/auth";

function PrivateRoute({ component: Component, ...rest }) {
    const { accessToken, refreshToken } = useAuth();
    console.log('Access token at private route: ', typeof(accessToken))
    console.log('Refresh token at private route: ', refreshToken)
    if(accessToken){
        console.log('access token is not null')
    }

    return (
        <Route {...rest}
            render={props =>
                accessToken ?
                    <Component {...props} /> 
                    :
                    <Redirect to={{ pathname: "/login", state:{ referer: props.location } }} />
            }
        />
    );
}

export default PrivateRoute;