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

        ]
    };

    doLogout = () => {
        this.setState({isLoggedIn: false});
    };

    doLogin = (isAdmin) => {
        this.setState({isLoggedIn: true});
        if (isAdmin) {
            this.setState({isAdmin: true});
        }
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
