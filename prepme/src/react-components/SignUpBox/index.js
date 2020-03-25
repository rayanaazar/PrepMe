import React from 'react';
import './SignUpBox.css';
import logo from "./static/prepme.png"
import {Button, TextField, Container} from "@material-ui/core";
import Redirect from "react-router-dom/es/Redirect";

import { signUp } from "../../actions/users";

class SignUpBox extends React.Component {

    state = {
        username: '',
        password: '',
        reenterPassword: '',
        invalidCredentials: false
    };

    handleInputChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    processSignUp= () => {
        if (this.state.username !== "" && this.state.password === this.state.reenterPassword) {
            this.setState({ invalidCredentials: false })
            signUp(this)
        } else {
            this.setState({ invalidCredentials: true })
        }
    };

    render() {
        return (
            <Container id="signUpBox" maxWidth={"xs"}>
              <img src={logo} id="prepme-logo" alt="PrepMe logo"/>
              <div id="app-name-text">PrepMe</div>
              <TextField
                  name="username"
                  label="Username"
                  variant="outlined"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  fullWidth
                  autoFocus
                  margin="normal"
              />
              <TextField
                  name="password"
                  label="Password (Min. 4 Characters)"
                  variant="outlined"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  fullWidth
                  margin="normal"
              />
              <TextField
                  name="reenterPassword"
                  label="Re-enter Password"
                  variant="outlined"
                  value={this.state.reenterPassword}
                  onChange={this.handleInputChange}
                  fullWidth
                  margin="normal"
              />
              <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={this.processSignUp}
              >
                  Sign Up
              </Button>
              <div id="cancel-button">
                <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={this.props.switchToLogin}
                >
                    Cancel
                </Button>
              </div>
              <h3 id="invalidText">{this.state.invalidCredentials ? 'Invalid Username and/or Password' : ''}</h3>
            </Container>
        );
    }
}

export default SignUpBox;
