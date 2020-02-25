import React from "react";

import "./styles.css";
import LeftSideBar from "../LeftSideBar/index";
import MainComponent from "../MainComponent/index";
import RightSideBar from "../RightSideBar/index";

/* Component for the Home page */
class Home extends React.Component {
  state = {}

  render() {
    const { username, isAdmin, events } = this.props.state
    return (
      <div className="home-div">

        <LeftSideBar 
          username={ username }
          isAdmin={ isAdmin } 
        />
        <MainComponent />
        <RightSideBar isAdmin={ isAdmin }/>
      </div>
    );
  }
}

export default Home;