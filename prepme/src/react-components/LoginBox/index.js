import React from 'react';
import './styles.css';
import logo from "./static/prepme.png"
import {Button, TextField, Container} from "@material-ui/core";
import Redirect from "react-router-dom/es/Redirect";

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

    processCredentials = users => {
        for (let i=0; i < users.length; i++) {
            if (this.state.username === users[i].username && this.state.password === users[i].password) {
                this.props.doLogin(users[i].isAdmin, this.state.username)
                console.log(this.state.username)
                return;
            }
        }
        this.setState({
            invalidCredentials: true
        });
        console.log('invalid');
    };

    render() {
        if (this.props.isLoggedIn) {
            return <Redirect to='/home'/>
        }

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
                        onClick={() => this.processCredentials(this.props.users)}
                    >
                        Login
                    </Button>
                    <div id="sign-up-button">
                        <Button
                            variant="outlined"
                            color="primary"
                            fullWidth
                            onClick={ this.props.switchToSignUp }
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
