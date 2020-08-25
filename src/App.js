import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
/* import { Cards , Country , Chart } from './components' */
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import User from "./pages/User";
import EditUser from "./pages/EditUser";

import AuthProvider from "./lib/AuthProvider";
import Navbar from "./components/Navbar/Navbar";
import AnonRoute from "./components/Routes/AnonRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";
import styles from './App.module.css'

class App extends Component {
  render() {
    return (
      <div>
      <AuthProvider>
        <Navbar />

        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
          <AnonRoute exact path="/signup" component={Signin} />
          <AnonRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/user" component={User} />
          <PrivateRoute exact path="/user/edit-profile" component={EditUser} />

        </Switch>
      </AuthProvider>
      </div>
    );
  }
}

export default App;
