import React from 'react';
import './App.css';
import LoginBox from "./react-components/LoginBox/LoginBox";

class App extends React.Component {

  render() {
    return (
        <div className="App">
            <LoginBox />
        </div>
    );
  }
}

export default App;
