import React from 'react'
import userService from '../lib/userService'
import { render } from '@testing-library/react'
import CardPlayer from '../components/Users/CardPlayer'
import { withAuth } from "../lib/AuthProvider";	


class User extends React.Component{

    state = {
        users:[]
    }
    
    
    componentDidMount(){
        userService()
        .then((allUsers)=>{
            console.log(allUsers)
            this.setState({ users:allUsers })
        })
        
}
    
    
    render() {
        const { users } = this.state;
        console.log(users)
    return (
        <div >
            {users.map( (player, index)=>{
                return <CardPlayer key = {index} {...player} />
            })}
        </div>
        )
    }
}

export default withAuth(User)
