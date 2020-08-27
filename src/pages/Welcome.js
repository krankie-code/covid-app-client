import React from 'react'
import { Link } from 'react-router-dom'
import './Welcome.css'

const Welcome = () => {
    return (
        <div className='welcome'>
    
            <h1>Pandemonium</h1>
            <Link to={'/game'}>
            <button>GET STARTED!</button>
            </Link>
        </div>
    )
}

export default Welcome
