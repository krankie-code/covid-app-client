import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";	

class Signin extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    console.log('Signup -> form submit', { username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>

          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange} />

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <input type="submit" value="Signup" />
        </form>
        
        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default Signin;





















/* import React, { Component } from 'react'
import { FormControl,InputLabel,Input,FormHelperText } from '@material-ui/core'


class Signup extends Component {
    state = {username : '', password : ''}

    render() {
        const {usermame, password} = this.state
        return (
            <div>
                <h1>Login</h1>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <InputLabel htmlFor="my-input">Username</InputLabel>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
            </div>
        )
    }
}

export default Signup
 */