import React from 'react';

import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';

import LoginPage from './react-components/LoginPage';
import Home from './react-components/Home';

class App extends React.Component {
    state = {
        username: "user",
        isAdmin: true,
        events: [

        ]
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
                            (<Home state={this.state}/>)}>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
