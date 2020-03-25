import React from 'react';
import './styles.css';
import logo from "./static/prepme.png"
import {Button, TextField, Container} from "@material-ui/core";
import Redirect from "react-router-dom/es/Redirect";

import { login } from "../../actions/users";

class LoginBox extends React.Component {

    state = {
        username: '',
        password: '',
        invalidCredentials: false,
    };

    handleInputChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

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
                    <TextField
                        name="password"
                        label="Password"
                        variant="outlined"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        fullWidth
                        margin="normal"
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
