import React from "react";

import "./styles.css";
import LoginBox from "../LoginBox/LoginBox";

/* Component for the Home page */
class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <LoginBox />
      </div>
    );
  }
}

export default Home;