import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../lib/service"
import classes from './Login.css'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


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
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="uname"
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
      </Box>
    </Container>
      );
    }
  }
  
  export default withAuth(Signin);
  


  
  
  
  
  
  
  
  
  
  