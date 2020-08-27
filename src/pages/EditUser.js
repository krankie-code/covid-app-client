
import axios from 'axios'
import React from "react";
import Typography from "@material-ui/core/Typography";
import { withAuth } from "../lib/AuthProvider";
import Navbar from '../components/Navbar/Navbar';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import './EditUser.css';
import "./User.css";
import service from '../lib/service'

class EditUser extends React.Component {
  state = {
    username: "",
    email: "",
    password:"",
    img:""
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  
    console.log('Did component mount ?', this.state);
    axios.put(process.env.REACT_APP_API_URI + '/api/user/edit-profile',this.state ,{ withCredentials:true})
      .then((res) => {       
        
        this.props.history.push('/user')
      })
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleDelete = () =>{
    axios.delete(process.env.REACT_APP_API_URI + '/api/user/edit-profile/delete',{ withCredentials:true})
        .then((res)=>{
          this.props.history.push('/login')
        })
  }

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


  componentDidMount(){
    this.setState({
      username: this.props.user.username,
      email:this.props.user.email,
      password:this.props.user.password,
      img:this.props.user.img
    })

  }
  
  render(props) {
    console.log(this.props);
    const {img} = this.props.user
    const { username, password, email } = this.state;

    return (
      <div >
        <Navbar />
        <div className='text-align'>
          <img src = {img}></img>
        </div>
        <Typography variant="h6" gutterBottom>
          Your profile
        </Typography>
        <form onSubmit={this.handleFormSubmit} >
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
          </Grid>
          <label>Image:</label>
          <input name = 'img' type='file'  onChange = {(e)=> this.handleFileUpload(e)}/>
          <div className='input'>
          <input className = 'buttons' type="submit" value="Edit" />
          <button className ='buttons' onClick = {this.handleDelete}>Delete profile</button>
          </div>
        </form>
          
          
        </div>
    );
  }
}

export default withAuth(EditUser);
