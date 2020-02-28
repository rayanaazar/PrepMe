import React from "react";

import "./styles.css";
import "../../App.css";
import icon from "./static/app-logo.ico";

import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core"; 
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import NavBar from './NavBar/index';

/* Component for the left SideBar*/
class LeftSideBar extends React.Component {
  render() {
    const { username, isAdmin, doLogout } = this.props
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

          <NavBar isAdmin={ isAdmin } />
        </div>
        
        <div id="logout-button">
          <Link className="unstyled-link" to="/login" onClick={ doLogout }>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ExitToAppIcon />}
            >
              Logout
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LeftSideBar;