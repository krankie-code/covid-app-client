import React from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import PublicIcon from '@material-ui/icons/Public';
import PersonIcon from '@material-ui/icons/Person';

import styles from './Navbar.css'

function Navbar(props) {
  const [value, setValue] = React.useState(0);
  const { user, logout, isLoggedin } = props;
 console.log(props)

  return (
    
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={styles.root}
      
    >
    <Link to="/game">
      <BottomNavigationAction label="Game" icon={<VideogameAssetIcon />} />
    </Link>
    <Link to="/home">
      <BottomNavigationAction label="Home" icon={<PublicIcon />} />
    </Link>
    <Link to="/user">
      <BottomNavigationAction label="User" icon={<PersonIcon />} />
    </Link>
    {isLoggedin ? (
      <BottomNavigationAction label="Logout" onClick ={logout} icon={<ExitToAppIcon />} />
   ) : (false) }
    </BottomNavigation>
   
  );
}
export default withAuth(Navbar);















/* class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
   
    return (
      <nav className='navbar'>
        <Link to={"/home"} id='home-btn'>
        <button className='navbar-button'>Home</button>

        </Link>
        {isLoggedin ? (
          <>
            <p className='navbar-user'>username:{user.username}</p>
            <button className='navbar-button' onClick ={logout}>Logout</button>
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

export default withAuth(Navbar); */

