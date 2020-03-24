import React from 'react';
import './Login.css';
import logo from "./static/prepme.png"
import Redirect from "react-router-dom/es/Redirect";
import {Container} from "@material-ui/core";

import LoginBox from '../LoginBox/index';
import SignUpBox from '../SignUpBox/index';

class Login extends React.Component {

    state = {
      isSigningUp: false
    }

    switchToSignUp = () => {
      this.setState({ isSigningUp: true })
    }

    switchToLogin = () => {
      this.setState({ isSigningUp: false })
    }

    render() {
        if (this.props.isLoggedIn) {
            return <Redirect to='/home'/>
        }
        console.log(this.state.isSigningUp)

        return (
            <Container id="login" maxWidth={"xs"}>
                    {/* <img src={logo} id="prepme-logo" alt="PrepMe logo"/>
                    <div id="app-name-text">PrepMe</div> */}
                    { this.state.isSigningUp ? (
                      <SignUpBox 
                        doSignUp={this.props.doSignUp}
                        switchToLogin={this.switchToLogin}
                      />
                    ) : (
                      <LoginBox 
                        doLogin={this.props.doLogin} 
                        isLoggedIn={this.props.isLoggedIn} 
                        users={this.props.users}
                        switchToSignUp={ this.switchToSignUp } 
                      />
                    )}
            </Container>
        );
    }
}

export default Login;
