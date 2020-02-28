import React from 'react';
import './styles.css';
import logo from "./static/prepme.png"
import {Button, TextField, Container} from "@material-ui/core";
import Redirect from "react-router-dom/es/Redirect";

class LoginBox extends React.Component {

    state = {
        username: '',
        password: '',
        invalidCredentials: false
    };

    handleInputChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    processCredentials = event => {
        if (this.state.username === 'admin' && this.state.password === 'admin') {
            this.props.doLogin(true);
            console.log('admin');
        } else if (this.state.username === 'user' && this.state.password === 'user') {
            this.props.doLogin(false);
            console.log('user');
        } else {
            this.setState({
                invalidCredentials: true
            });
            console.log('invalid');
        }
    };

    render() {
        if (this.props.isLoggedIn) {
            return <Redirect to='/home'/>
        }

        return (
            <Container id="loginBox" maxWidth={"xs"}>
                <form onSubmit={this.processCredentials}>
                    <img src={logo} alt="PrepMe logo"/>
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
                    >
                        Login
                    </Button>
                    <h3 id="invalidText">{this.state.invalidCredentials ? 'Invalid Credentials' : ''}</h3>
                </form>
            </Container>
        );
    }
}

export default LoginBox;
