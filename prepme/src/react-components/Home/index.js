import React from "react";

import "./styles.css";
import EventCard from "../EventCard/index";

/* Component for the Login page */
class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <EventCard title="CSC309" />
      </div>
    );
  }
}

export default Home;