import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...rest}) =>(
    <Route {...rest} render={props =>(
        localStorage.getItem('id')
        ? <Component {...props} />
        : <Redirect to={{pathname: '/react-project-pc/login' , state: {from: props.location} }} />
    )} />
)