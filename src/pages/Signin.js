import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../lib/service"


class Signin extends Component {
  state = { username: "", password: "" , email : "", img :''};

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password , email, img} = this.state;
    /* console.log('Signup -> form submit', { username, password }); */
    this.props.signup({username,password,email,img})
  };

  handleChange = event => {
    const { name, value} = event.target;
    this.setState({ [name]: value });
  };

  handleFileUpload = e =>{
    console.log(e.target.files[0])

    const uploadData = new FormData();

    uploadData.append('img', e.target.files[0])
    console.log(uploadData)
    service.handleUpload(uploadData)
      .then(response =>{
        console.log(response,'response is')

        this.setState({ img:response.secure_url})
      })
      .catch(err =>{
        console.log('Error while uploading the file')
      })
  }

  render() {
    const { username, password , email, img} = this.state;
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit} >

          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange} />

          <label>Email</label>
          <input type = 'text' name = 'email' value = {email} onChange={this.handleChange}/>


          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <label>Image:</label>
          <input type='file' value = {img} onChange = {(e)=> this.handleFileUpload(e)}/>

          <input type="submit" value="Signup" />
        </form>
        
        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signin);





















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