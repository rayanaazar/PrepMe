import React from "react";

import "./styles.css";
import EventCard from "../EventCard/index";
import LeftSideBar from "../LeftSideBar/index";

/* Component for the Home page */
class Home extends React.Component {
  render() {
    return (
      <div className="home-div">

        <LeftSideBar />
        {/* <EventsList /> */}
        {/* <EventCard title="CSC309" /> */}
        {/* <RightSideBar /> */}
      </div>
    );
  }
}

export default Home;