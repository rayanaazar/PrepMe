import React from 'react';
import './styles.css';
import logo from "./static/prepme.png"
import {Button, TextField, Container} from "@material-ui/core";
import Redirect from "react-router-dom/es/Redirect";

import PasswordEntry from '../ChangePassword/PasswordEntry/index';

import { login } from "../../actions/users";

class LoginBox extends React.Component {

    state = {
        username: '',
        password: '',
        showPsw: false,
        invalidCredentials: false,
    };

    handleInputChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    onPswChange = e => {
        const { value } = e.target
        this.setState({ password: value })
      }

    toggleShowPsw = () => { this.setState({ showPsw: !this.state.showPsw }) }

    render() {
        const {switchToSignUp, app } = this.props

        return (
            <Container id="loginBox" maxWidth={"xs"}>
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
                    {/* <TextField
                        name="password"
                        label="Password"
                        variant="outlined"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        fullWidth
                        margin="normal"
                    /> */}
                    <PasswordEntry 
                        label="Password"
                        value={ this.state.password }
                        showPsw={ this.state.showPsw }
                        toggleShowPsw={ this.toggleShowPsw }
                        onChange={ this.onPswChange }
                    />
                    <Button
                        type='submit'
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={() => login(this, app)}
                    >
                        Login
                    </Button>
                    <div id="sign-up-button">
                        <Button
                            variant="outlined"
                            color="primary"
                            fullWidth
                            onClick={ switchToSignUp }
                        >
                            Sign Up
                        </Button>
                    </div>
                    <h3 id="invalidText">{this.state.invalidCredentials ? 'Invalid Credentials' : ''}</h3>
            </Container>
        );
    }
}

export default LoginBox;
