import React from "react";

import "./styles.css";
import icon from "./static/app-logo.ico";

import { Button } from "@material-ui/core"; 

import NavBar from './NavBar/index';

/* Component for the left SideBar*/
class LeftSideBar extends React.Component {
  render() {
    const { username, isAdmin} = this.props
    return (
      <div id="sidebar-div">

        <div>
          <div id="app-info">
            <div className="app-logo">
              <img src={ icon } />
            </div>
            <div>
              <div id="app-name">PrepMe</div>
              <div id="username">@{ username }</div>
            </div>
          </div>

          <NavBar />
        </div>
        
        <div>
          <Button
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