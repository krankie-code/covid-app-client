import React, { Component } from "react";
import { Switch } from "react-router-dom";
/* import { Cards , Country , Chart } from './components' */
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import User from "./pages/User";
import EditUser from "./pages/EditUser";
import results from './pages/results'
import Welcome from './pages/Welcome'
import AnonRoute from "./components/Routes/AnonRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";
import Game from './components/Game/Game'
import AuthProvider from "./lib/AuthProvider";

class App extends Component {
  render() {
    return (
      <div>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
          <AnonRoute exact path="/signup" component={Signin} />
          <AnonRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/user" component={User} />
          <PrivateRoute exact path="/user/edit-profile" component={EditUser} />
          <PrivateRoute path = '/game' component ={Game}/>
          <PrivateRoute path='/results' component = {results} />
          <AnonRoute exact path ='/' component = {Welcome}/>

        </Switch>
      </AuthProvider>
      </div>
    );
  }
}

export default App;
