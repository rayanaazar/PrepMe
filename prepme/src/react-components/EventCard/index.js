import React from "react";

import "../../index.css";
import "./styles.css";

import { List, ListItem, ListItemText, ListItemIcon, Button} from '@material-ui/core'; 
import EventIcon from '@material-ui/icons/Event';

/* Component for the Home page */
class EventCard extends React.Component {
  render() {
    const { title, discription, username} = this.props

    return (
      <div className="event-card">
        <div className="header" >
          <div className="icon">
            <img/>
          </div>
          <div className="title" >
            { title }
          </div>
          <div className="username" >
            { username }
          </div>
        </div>
        <div className='event_discription'>
          { discription }
        </div>
        <div className="actions">
          <div className="action-button" id='view-button'>
            <Button variant="outlined" color="primary" size="small" href="#outlined-buttons">
              View
            </Button>
          </div>
          <div className="action-button" id='join-button'>
            <Button variant="outlined" color="primary" size="small"  href="#outlined-buttons">
              Join
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventCard;