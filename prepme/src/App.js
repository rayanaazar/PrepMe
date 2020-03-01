import React from 'react';

import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';

import LoginBox from './react-components/LoginBox';
import Home from './react-components/Home';

class App extends React.Component {
    state = {
        isLoggedIn: false,
        username: "user",
        isAdmin: false,
        events: [
            {title:"CSC309", purpose:"Midterm", username:"@rayanaazar", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", location:"college street"},
            {title:"CSC321", purpose:"Final Exam", username:"@manveerbasra", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", location:"yonge street"},
            {title:"CSC263", purpose:"Assignment 2", username:"@lucasfenau", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", location:"yonge street"},
            {title:"CSC343", purpose:"Midterm", username:"@juliequinn", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", location:"bahen building"}  
        ],
        users: [
            {username: "user", password: "user", isAdmin: false},
            {username: "admin", password: "admin", isAdmin: true}
        ]
    };

    setEvents = (events) => {
        this.setState({
            events: events
        })
    };

    doChangePassword = (currPsw, newPsw, newPswConfirm) => {
        const users = this.state.users

        if (newPsw == newPswConfirm) {
            for (let i=0; i < this.state.users.length; i++) {
                if (this.state.username == users[i].username && currPsw == users[i].password) {
                    users[i].password = newPsw
                    console.log("Changed Password of", users[i].username, "to", newPsw)
                }
            }
        }

        this.setState({ users: users })
    }

    doLogout = () => {
        this.setState({isLoggedIn: false});
    };

    doLogin = (isAdmin, username) => {
        this.setState({
            username: username,
            isLoggedIn: true,
            isAdmin: isAdmin
        })
    };

    routing() {
        if (!this.state.isLoggedIn) {
            return(
                <Switch>
                    <Route exact path='/login' render={() =>
                        (<div>
                            <LoginBox doLogin={this.doLogin} isLoggedIn={this.state.isLoggedIn}/>
                        </div>)}>
                    </Route>
                    <Route path='/'>
                        <Redirect to='/login'/>
                    </Route>
                </Switch>
            )
        } else {
            return(
                <Switch>
                    <Route path='/home' render={() =>
                        (<Home 
                            state={this.state} 
                            doLogout={ this.doLogout } 
                            setEvents={this.setEvents} 
                            doChangePassword={this.doChangePassword} 
                        />)}>
                    </Route>
                    <Route path='/'>
                        <Redirect to='/home'/>
                    </Route>
                </Switch>
            )
        }
    }
    
    render() {
        {console.log(this.state.isLoggedIn)}
        return (
            <div>
                <BrowserRouter>
                    {/*<Switch> */}
                    {/*    <Route exact path='/'>*/}
                    {/*        <Redirect to='/login' />*/}
                    {/*    </Route>*/}
                    {/*    <Route exact path='/login' render={() =>*/}
                    {/*        (<LoginPage state={this.state}/>)}/>*/}
                    {/*    <Route path='/home' render={() =>*/}
                    {/*        (<Home state={this.state} doLogout={ this.doLogout }/>)}>*/}
                    {/*    </Route>*/}
                    {/*</Switch>*/}
                    {this.routing()}
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
