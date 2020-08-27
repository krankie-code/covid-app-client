import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import {Avatar, Grid, Button, TextField, FormControlLabel, Checkbox, Box,Container} from '@material-ui/core'
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import classes from "./Login.css";

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <h1 className="log">Log In</h1>

          <form className={classes.form} onSubmit={this.handleFormSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              value="login"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
        {this.props.wrongCredentials ? (<p>{this.props.wrongCredentials}</p>) : null }
        </Box>
      </Container>
    );
  }
}

export default withAuth(Login);
