import React from 'react';

import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';

import LoginPage from './react-components/LoginPage';
import Home from './react-components/Home';

class App extends React.Component {
    state = {
        isLoggedIn: false,
        username: "user",
        isAdmin: false,
        events: [{title:"CSC309", purpose:"Midterm", username:"@rayanaazar", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", location:"college street"},
        {title:"CSC321", purpose:"Final Exam", username:"@manveerbasra", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", location:"young street"},
        {title:"CSC263", purpose:"Assignment 2", username:"@lucasfenau", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", location:"young street"},
        {title:"CSC343", purpose:"Midterm", username:"@juliequinn", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", location:"bahen building"}  
        ]
    }

    doLogout = () => {
        this.setState({isLoggedIn: false})
    }
    
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
                        { /* Each Route below shows a different component depending on the exact path in the URL  */ }
                        <Route exact path='/'>
                            <Redirect to='/login' />
                        </Route>
                        <Route exact path='/login' render={() =>
                            (<LoginPage state={this.state}/>)}/>
                        <Route path='/home' render={() =>
                            (<Home state={this.state} doLogout={ this.doLogout }/>)}>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
