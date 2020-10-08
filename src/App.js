import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "./layouts/Admin.js";
import { PrivateRoute } from './PrivateRoute';
import Login from './SignupSignin/Signin';
import Logout from './SignupSignin/Logout';
import Register from './SignupSignin/Signup';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <PrivateRoute path="/react-project-pc/admin" component={AdminLayout} />
        <Route path="/react-project-pc/login" component={Login} />
        <Route path="/react-project-pc/logout" component={Logout} />
        <Route path="/react-project-pc/register" component={Register} />
        <Redirect from="/react-project-pc/" to="/login" />
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
