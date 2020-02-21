import React from 'react';
import './LoginBox.css';
import logo from "./static/prepme.png"
import {Button, TextField, Grid, Typography, Container} from "@material-ui/core";

class LoginBox extends React.Component {

    render() {
        return (
            <Container id="loginBox" maxWidth={"xs"}>
                <img src={logo}/>
                <TextField
                    id="username"
                    name="password"
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                >
                    Login
                </Button>
            </Container>
        );
    }
}

export default LoginBox;
