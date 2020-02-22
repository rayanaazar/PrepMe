import React from "react";

import "./styles.css";
import EventCard from "../EventCard/index";
import LeftSideBar from "../LeftSideBar/index";

/* Component for the Home page */
class Home extends React.Component {
  state = {
    onEventsPage: false
  }

  render() {
    const { username, isAdmin, events } = this.props.state
    return (
      <div className="home-div">

        <LeftSideBar 
          username={ username }
          isAdmin={ isAdmin } 
          onEventsPage={ this.state.onEventsPage } />
        {/* <EventsList /> */}
        {/* <EventCard title="CSC309" /> */}
        {/* <RightSideBar /> */}
      </div>
    );
  }
}

export default Home;