import React from 'react'
import{ userService} from '../lib/userService'
import { render } from '@testing-library/react'
import CardPlayer from '../components/Users/CardPlayer'
import { withAuth } from "../lib/AuthProvider";	
import axios from 'axios'


class User extends React.Component{

    state = {
        users:[]
    }
    
    
    componentDidMount() {
        console.log('Did component mount ?');
        axios.get('http://localhost:4000/api/user')
          .then((res) => {       
              console.log(res)
            this.setState({users:res.data});
          })
      }
    
    render() {
       /*  const { users } = this.state;
        console.log(users) */
    return (
        <div >
          {/*   {users.map( (player, index)=>{
                return <CardPlayer key = {index} {...player} />
            })} */}
        </div>
        )
    }
}

export default withAuth(User)
