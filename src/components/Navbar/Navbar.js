import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      <nav className='navbar'>
        <Link to={"/home"} id='home-btn'>
        <button className='navbar-button'>Home</button>

        </Link>
        {false ? (
          <>
            <p className='navbar-user'>username:</p>
            <button className='navbar-button'>Logout</button>
          </>
        ) : (
          <>
            <Link to='/login'>
              <button className='navbar-button'>Login</button>
            </Link>
            <br />
            <Link to='/signup'>
              <button className='navbar-button'>Sign Up</button>
            </Link>
          </>
        )}
      </nav>
    );
  }
}

export default Navbar;
