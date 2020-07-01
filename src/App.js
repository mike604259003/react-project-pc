import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "./layouts/Admin.js";
import { PrivateRoute } from './PrivateRoute';
import Login from './SignupSignin/Signin';
import Logout from './SignupSignin/Logout';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <PrivateRoute path="/admin" component={AdminLayout} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Redirect from="/" to="/login" />
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
