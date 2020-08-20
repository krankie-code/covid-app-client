import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import withAuth from

class Navbar extends Component {
    render() {
        return (
           
                <nav>
                    <Link to='/game'>

                    </Link>
                    {false ? (
                        <p className='navbar-user'>username:</p>
                        <button className = 'navbar-button'>Logout</button>
                    ):(
                        <Link to='/login'>
                        <button clasName='navbar-button'>Login</button>
                        </Link>
                        <Link to='/signup'>
                        <button className = 'navbar-button'>Signup</button>
                        </Link>
                    )}
                </nav>
            
        )
    }
}

export default Navbar
