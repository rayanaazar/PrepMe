import React from "react";

import "../../index.css";
import "./styles.css";

import { List, ListItem, ListItemText, ListItemIcon, Button} from '@material-ui/core'; 
import EventIcon from '@material-ui/icons/Event';

/* Component for the Home page */
class EventCard extends React.Component {
  
  state = {
    text: "Join"
  }
  changeText = (t) => {
    const join = "Join";
    if (this.state.text === "Joined"){
      this.setState( {text:join });
    }
    else {
      this.setState({ text:t }); 
    } 
  }
  
  render() {
    const { title, username, description, purpose} = this.props 

    return (
      <div className="event-card">
        <div className="header" >
          <div className="event-info">
            <div className="icon">
              <img/>
            </div>
            <div>
            <div className="title" >
              {title}
            </div>
            <div className="event-purpose">
              {purpose}
            </div>
            </div>
          </div>
          <div className="username" >
             {username}
          </div>
        </div>
        <div className='event_description'>
            {description}
        </div>
        <div className="actions">
          <div className="action-button" id='view-button'>
            <Button variant="outlined" color="primary" size="small">
              View
            </Button>
          </div>
          <div className="action-button" id='join-button'>
            <Button onClick={ () => { this.changeText("Joined")}  } variant="outlined" color="primary" size="small">
              {this.state.text}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventCard;