import React, { Component } from 'react';
import { FormControl,InputLabel,Input,FormHelperText } from '@material-ui/core'


class Login extends Component {
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

export default Login
