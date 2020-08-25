/* import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";

console.log()

class EditUser extends Component {
    render() {
       
        return (
            <div>
                <h1>Edit</h1>
            </div>
        )
    }
}
export default withAuth(EditUser)
 */
import axios from 'axios'
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./EditUser.css";
import { withAuth } from "../lib/AuthProvider";
import Avatar from "@material-ui/core/Avatar";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

class EditUser extends React.Component {
  state = {
    username: "",
    email: "",
    password:""
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  
    console.log('Did component mount ?');
    axios.put('http://localhost:4000/api/user/edit-profile',this.state ,{ withCredentials:true})
      .then((res) => {       
        
        this.props.history.push('/user')
      })
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleDelete = () =>{
    axios.delete('http://localhost:4000/api/user/edit-profile/delete',{ withCredentials:true})
        .then((res)=>{
          this.props.history.push('/login')
        })
  }

  componentDidMount(){
    this.setState({
      username: this.props.user.username,
      email:this.props.user.email,
      password:this.props.user.password
    })

  }
  
  render(props) {
    console.log(this.props);
    const {img} = this.props.user
    const { username, password, email } = this.state;

    return (
      <div >
        <div className='root'>
        <img src = {img}></img>
        </div>
        <Typography variant="h6" gutterBottom>
          Your profile
        </Typography>
        <form onSubmit={this.handleFormSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name='username'
                label="Username"
                fullWidth
                autoComplete="given-name"
                value={username}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name='email'
                label="Email"
                fullWidth
                autoComplete="family-name"
                value={email}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name='password'
                label="Password"
                fullWidth
                autoComplete="family-name"
                value={password}
                onChange={this.handleChange}
                type = 'password'
              />
            </Grid>
            
            {/*  <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid> */}
          </Grid>
          <input type="submit" value="Edit" />
        </form>
          
        <button onClick = {this.handleDelete}>Delete profile</button>
          
        </div>
    );
  }
}

export default withAuth(EditUser);
