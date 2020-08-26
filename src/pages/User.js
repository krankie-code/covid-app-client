import React from "react";
import axios from "axios";
import { userService } from "../lib/userService";
import CardPlayer from "../components/Users/CardPlayer";
import CardCurrentUser from "../components/Users/CardCurrentUser";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import "./User.css";
import Navbar from "../components/Navbar/Navbar";

class User extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    console.log("Did component mount ?");
    axios
      .get(process.env.REACT_APP_API_URI +'/api/user', { withCredentials: true })
      .then((res) => {
        /*  console.log(res) */
        this.setState({ users: res.data.users, position: res.data.position });
      });
  }

  render() {
    const { users, position } = this.state;
   
    return (
      <div>
        <Navbar />
        <div className='container'>
        <div>
          <Link to="/user/edit-profile">
            <CardCurrentUser position={position} />
          </Link>
          <br />
        </div>
        <h1 className = 'ranking'>Ranking</h1>
        {users.map((player, index) => {
          return <CardPlayer key={index} {...player} index={index} />;
        })}
      </div>
      </div>
    );
  }
}

export default withAuth(User);
