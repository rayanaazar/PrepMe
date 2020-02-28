import React from "react";

import "./styles.css";
import { Redirect } from 'react-router-dom';
import LeftSideBar from "../LeftSideBar/index";
import MainComponent from "../MainComponent/index";
import RightSideBar from "../RightSideBar/index";

/* Component for the Home page */
class Home extends React.Component {
  state = {}

  render() {
    const { isLoggedIn, username, isAdmin, events, doLogout } = this.props.state
    return (
      <div className="home-div">
        {/* Redirect to login page if not LoggedIn 
        Commented out for now so we can test other pages */}
        {/* { !isLoggedIn ? (<Redirect to='/login' />) : (<div />)} */}

        <LeftSideBar 
          username={ username }
          isAdmin={ isAdmin } 
          doLogout={ doLogout }
        />
        <MainComponent/>
        <RightSideBar isAdmin={ isAdmin }/>
      </div>
    );
  }
}

export default Home;