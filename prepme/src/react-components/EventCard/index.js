import React from "react";

import "../../index.css";
import "./styles.css";

import { List, ListItem, ListItemText, ListItemIcon, Button} from '@material-ui/core'; 
import EventIcon from '@material-ui/icons/Event';

/* Component for the Home page */
class EventCard extends React.Component {
  
  state = {
    isJoined: "Join"
  }
  changeText = (t) => {
    const join = "Join";
    if (this.state.isJoined === "Joined"){
      this.setState( {isJoined:join });
    }
    else {
      this.setState({ isJoined:t }); 
    } 
  }
  

  render() {
    const {onViewing, event} = this.props 

    return (
      <div className="event-card">
        <div className="header" >
          <div className="event-info">
            <div className="icon">
              <img/>
            </div>
            <div>
            <div className="course" >
              {event.course}
            </div>
            <div className="event-subject">
              {event.subject}
            </div>
            </div>
          </div>
          <div className="username" >
             {event.username}
          </div>
        </div>
        <div className='event_description'>
            {event.description}
        </div>
        <div className="actions">
          <div className="action-button" id='view-button'>
            <Button onClick={() => onViewing(event)}  variant="outlined" color="primary" size="small">
              View
            </Button>
          </div>
          <div className="action-button" id='join-button'>
            <Button onClick={ () => { this.changeText("Joined")}  } variant="outlined" color="primary" size="small">
              {this.state.isJoined}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventCard;