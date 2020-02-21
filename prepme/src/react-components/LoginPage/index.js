import React from "react";

import "./styles.css";
import LoginBox from "../LoginBox/LoginBox";

/* Component for the Login page */
class LoginPage extends React.Component {
  render() {
    return (
      <div className="App">
        <LoginBox />
      </div>
    );
  }
}

export default LoginPage;