import React from "react";
import auth from "./auth-service";
const { Consumer, Provider } = React.createContext();

// HOC para crear Consumer
const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {({ login, signup, user, logout, isLoggedin, nameExistsMessage,emailExistsMessage,wrongCredentials }) => {
            return (
              <WrappedComponent
                login={login}
                signup={signup}
                user={user}
                logout={logout}
                isLoggedin={isLoggedin}
                nameExistsMessage={nameExistsMessage}
                emailExistsMessage={emailExistsMessage}
                wrongCredentials = {wrongCredentials}

                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

// Provider
class AuthProvider extends React.Component {
  state = {
    isLoggedin: false,
    user: null,
    isLoading: true,
    nameExistsMessage: "",
    emailExistsMessage:"",
    wrongCredentials:''
  };

  componentDidMount() {
    auth
      .me()
      .then((user) =>
        this.setState({ isLoggedin: true, user: user, isLoading: false })
      )
      .catch((err) =>
        this.setState({ isLoggedin: false, user: null, isLoading: false })
      );
  }

  signup = (user) => {
    const { username, password, email, img } = user;

    auth
      .signup({ username, password, email, img })
      .then((user) => this.setState({ isLoggedin: true, user }))
      .catch(({ response }) =>
        this.setState({ nameExistsMessage: "Username already exists",
                        emailExistsMessage:"This email is already being used"})
      );
  };

  login = (user) => {
    const { username, password } = user;

    auth
      .login({ username, password })
      .then((user) => this.setState({ isLoggedin: true, user }))
      .catch(({ response }) =>
      this.setState({ wrongCredentials : 'Invalid Credentials'}));
  };

  logout = () => {
    auth
      .logout()
      .then(() => this.setState({ isLoggedin: false, user: null }))
      .catch((err) => console.log(err));
  };

  render() {
    const { isLoading, isLoggedin, user, nameExistsMessage, emailExistsMessage, wrongCredentials} = this.state;
    const { login, logout, signup } = this;

    return isLoading ? (
      <div>Loading</div>
    ) : (
      <Provider
        value={{ isLoggedin, user, login, logout, signup, nameExistsMessage, emailExistsMessage, wrongCredentials }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer, withAuth };

export default AuthProvider;
