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
        events: [

        ]
    }

    doLogout = () => {
        this.setState({isLoggedIn: false})
    }

    routing() {
        if (!this.state.isLoggedIn) {
            return(
                <Switch>
                    <Route exact path='/login' render={() =>
                        (<LoginPage state={this.state}/>)}>
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
                        (<Home state={this.state} doLogout={ this.doLogout }/>)}>
                    </Route>
                    <Route path='/'>
                        <Redirect to='/home'/>
                    </Route>
                </Switch>
            )
        }
    }
    
    render() {
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
