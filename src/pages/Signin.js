import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../lib/service"
import classes from './Login.css'
import {Avatar, Grid, Button, TextField, FormControlLabel, Checkbox, Box,Container,CssBaseline} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

class Signin extends Component {
  state = { username: "", password: "" , email : "", img :''};

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password , email, img} = this.state;
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
    console.log(this.props)
    return (
      
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className='avatar'>
          <LockOutlinedIcon />
        </Avatar>
        <h1 className='log'>Signup</h1>
        <form className={classes.form} onSubmit={this.handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="outlined"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                value={username} 
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value = {email} 
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid>
            <label>Image:</label>
          <input name = 'img' type='file'  onChange = {(e)=> this.handleFileUpload(e)}/>
             
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to={'/login'}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      {this.props.nameExistsMessage ? (<p>{this.props.nameExistsMessage}</p>) : null }
      {this.props.emailExistsMessage ? (<p>{this.props.emailExistsMessage}</p>) : null }
      
      </Box>
    </Container>
      );
    }
  }
  
  export default withAuth(Signin);
  


  
  
  
  
  
  
  
  
  
  