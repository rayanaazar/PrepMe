import React from "react";

import "./styles.css";
import icon from "./static/app-logo.ico";

import { Button } from "@material-ui/core"; 

/* Component for the LeftSideBar page */
class LeftSideBar extends React.Component {
  render() {
    // const { username } = this.props
    const username = "@rayana.a"
    return (
      <div className="sidebar-div">

        <div className="header">
          <div className="app-info">
            <div className="app-logo">
              <img src={ icon } />
            </div>
            <div className="app-name">PrepMe</div>
          </div>

          <div className="username">{ username }</div>
        </div>
        
        <div className="logout-button-div">
          <Button
            className="logout-button"
            variant="contained"
            color="primary"
          >
            Logout
          </Button>
        </div>
      </div>
    );
  }
}

export default LeftSideBar;