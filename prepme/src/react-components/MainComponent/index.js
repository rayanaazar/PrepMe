import React from "react";

import "./styles.css";
import EventCard from "../EventCard/index";
import { List, ListItem, ListItemText, ListItemIcon, Button} from '@material-ui/core'; 
import EventIcon from '@material-ui/icons/Event';

/* Component for the main center component */
class MainComponent extends React.Component {
  render() {
    return (
      <div className="main-component-div">
    
        <div className="header" >
          <div className="section-name">
            Events
          </div>
          <div id='create-event'>
            <Button variant="outlined" color="primary" size="medium" href="#outlined-buttons">
              Create Event
            </Button>
          </div>
          <div className="username" >
          </div>
        </div>

        <div className="event-list">
          <EventCard/>
        </div>
      </div>
    );
  }
}

export default MainComponent;