import React from "react";

import "../../index.css";
import "./styles.css";

import { List, ListItem, ListItemText, ListItemIcon, Button} from '@material-ui/core'; 
import EventIcon from '@material-ui/icons/Event';

/* Component for the Home page */
class EventCard extends React.Component {
  render() {
    const { title, username, description, icon} = this.props

    return (
      <div className="event-card">
        <div className="header" >
          <div className="event-info">
            <div className="icon">
              <img/>
            </div>
            <div>
            <div className="title" >
              Title
            </div>
            <div className="event-purpose">
              Midterm
            </div>
            </div>
          </div>
          <div className="username" >
             @rayanaazar 
          </div>
        </div>
        <div className='event_description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
        </div>
        <div className="actions">
          <div className="action-button" id='view-button'>
            <Button variant="outlined" color="primary" size="small">
              View
            </Button>
          </div>
          <div className="action-button" id='join-button'>
            <Button variant="outlined" color="primary" size="small">
              Join
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventCard;