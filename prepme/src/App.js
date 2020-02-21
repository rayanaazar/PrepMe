import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import LoginPage from './react-components/LoginPage';
import Home from './react-components/Home';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <Route exact path='/' render={() => 
                            (<LoginPage />)}/>
            <Route exact path='/home' render={() => 
                            (<Home />)}/>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
