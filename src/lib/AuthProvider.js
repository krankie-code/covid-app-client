import React from "react";
import auth from "./auth-service";	
const { Consumer, Provider } = React.createContext();

// HOC para crear Consumer
const withAuth = (WrappedComponent) => {
    
  return class extends React.Component {
    
    render() {
      
      return (
        <Consumer>
        { 
          ({login, signup, user, logout, isLoggedin, nameExistsMessage}) => {
          return (
            <WrappedComponent 
              login={login} 
              signup={signup} 
              user={user}
              logout={logout}
              isLoggedin={isLoggedin}
              nameExistsMessage = {nameExistsMessage}
              
              {...this.props} />
          );
        }}
        </Consumer>
      );
    }
  };
};


// Provider
class AuthProvider extends React.Component {
  state = { isLoggedin: false, user: null, isLoading: true, nameExistsMessage:'',};

componentDidMount() {
    auth.me()
    .then((user) => this.setState({ isLoggedin: true, user: user, isLoading: false }))
    .catch((err) => this.setState({ isLoggedin: false, user: null, isLoading: false }));
  }

  signup = (user) => {
    const { username, password, email, img} = user;
    
    auth.signup({ username, password, email, img })
      .then((user) => this.setState({ isLoggedin: true, user}) )
      .catch(({response}) => this.setState({ nameExistsMessage:'username already exists',
                                                                    }));
  };


  login = (user) => {
    const { username, password } = user;

    auth.login({ username, password })
      .then((user) => this.setState({ isLoggedin: true, user }))
      .catch((err) => console.log(err));
  };

	
  logout = () => {
    auth.logout()
      .then(() => this.setState({ isLoggedin: false, user: null }))
      .catch((err) => console.log(err));
  };

	
  render() {
    const { isLoading, isLoggedin, user, nameExistsMessage} = this.state;
    const { login, logout, signup } = this;
    
    return (
      isLoading ? 
      <div>Loading</div> 
      :
      (<Provider value={{ isLoggedin, user, login, logout, signup, nameExistsMessage}} >
         {this.props.children}
      </Provider>)
    )	
  }
}

export { Consumer, withAuth };	

export default AuthProvider;		