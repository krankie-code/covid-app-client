import React from 'react'
import axios from 'axios'
import{ userService} from '../lib/userService'
import CardPlayer from '../components/Users/CardPlayer'
import CardCurrentUser from '../components/Users/CardCurrentUser'
import { withAuth } from '../lib/AuthProvider'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom";
import './User.css'



class User extends React.Component{

    state = {
        users:[]
    }
    
    
    componentDidMount() {
        console.log('Did component mount ?');
        axios.get('http://localhost:4000/api/user', { withCredentials:true})
          .then((res) => {       
             /*  console.log(res) */
            this.setState({users:res.data.users, position:res.data.position});
          })
      }
    
    render() {
        const { users,position } = this.state;
       /*  console.log(users)
        console.log(this.props) */
    return (
        <div >
            <div className ='user-container'>
                   {/*  <BottomNavigationAction label="edit-profile" icon={<EditIcon />} /> */}
                <Link to="/user/edit-profile">
             <CardCurrentUser position={position}/>
                </Link>
                <br />
            </div>
            {users.map( (player, index)=>{
                return <CardPlayer key = {index} {...player} index = {index} />
            })}
        </div>
        )
    }
}

export default withAuth(User)
