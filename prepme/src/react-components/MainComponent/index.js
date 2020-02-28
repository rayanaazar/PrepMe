import React from "react";

import "./styles.css";
import EventCard from "../EventCard/index";
import { List, ListItem, ListItemText, ListItemIcon, Button} from '@material-ui/core'; 
import EventIcon from '@material-ui/icons/Event';

/* Component for the main center component */
class MainComponent extends React.Component {
  render() {
    const { title, username, discription, icon} = this.props
    return (
      <div className="main-component-div">
        <div className="section-header" >
          <div className="section-name">
            Events
          </div>
          <div id='create-event'>
            <Button variant="outlined" color="primary" size="medium" href="#outlined-buttons">
              Create Event
            </Button>
          </div>
        </div>
        <div className="event-list">
          <div className="event">
            <EventCard    
            title={title}
            username={username} 
            discription={discription}/>
          </div>
          <div className="event">
            <EventCard/>
          </div>
          <div className="event">
            <EventCard/>
          </div>
          <div className="event">
            <EventCard/>
          </div>
        </div>
      </div>
    );
  }
}

export default MainComponent;