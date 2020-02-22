import React from "react";

import "./styles.css";
import icon from "./static/app-logo.ico";

import { Button } from "@material-ui/core"; 

import NavBar from './NavBar/index';

/* Component for the left SideBar*/
class LeftSideBar extends React.Component {
  render() {
    const { username, isAdmin, onEventsPage } = this.props
    return (
      <div className="sidebar-div">

        <div className="header">
          <div className="app-info">
            <div className="app-logo">
              <img src={ icon } />
            </div>
            <div>
              <div className="app-name">PrepMe</div>
              <div className="username">@{ username }</div>
            </div>
          </div>

          {/* Display NavBar if current user is an admin */}
          { isAdmin ? (<NavBar onEventsPage={ onEventsPage } />) : (< div />) }
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