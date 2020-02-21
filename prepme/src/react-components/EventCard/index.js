import React from "react";

import "../../index.css";
import "./styles.css";

/* Component for the Home page */
class EventCard extends React.Component {
  render() {
    const { title } = this.props

    return (
      <div className="event-card">
        <div className="header" >
          <div className="icon">
            <img />
          </div>

          <div className="title" >
            { title }
          </div>
        </div>
        
      </div>
    );
  }
}

export default EventCard;