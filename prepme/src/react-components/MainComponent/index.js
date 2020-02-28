<<<<<<< HEAD
import React from "react";

import "./styles.css";
import EventCard from "../EventCard/index";
import { List, ListItem, ListItemText, ListItemIcon, Button} from '@material-ui/core'; 
import EventIcon from '@material-ui/icons/Event';

/* Component for the main center component */
class MainComponent extends React.Component {
  render() {
    const { title, username, description, icon, events} = this.props
    return (
      <div className="main-component-div">
        <div className="section-header" >
          <div className="section-name">
            Events
          </div>
          <div id='create-event'>
            <Button variant="outlined" color="primary" size="medium">
              Create Event
            </Button>
          </div>
        </div>
        <div className="event-list">

          {events.map(event => (
            <EventCard 
            title={event.title}
            username={event.username}
            description={event.description} 
            purpose={event.purpose}/> 
          ))}
        </div>
      </div>
    );
  }
}

=======
import React from "react";

import "./styles.css";
import EventCard from "../EventCard/index";
import { List, ListItem, ListItemText, ListItemIcon, Button} from '@material-ui/core'; 
import EventIcon from '@material-ui/icons/Event';

/* Component for the main center component */
class MainComponent extends React.Component {
  render() {
    const { title, username, description, icon} = this.props
    return (
      <div className="main-component-div">
        <div className="section-header" >
          <div className="section-name">
            Events
          </div>
          <div id='create-event'>
            <Button variant="outlined" color="primary" size="medium">
              Create Event
            </Button>
          </div>
        </div>
        <div className="event-list">
      
            <EventCard/>   
        
            <EventCard/>
      
            <EventCard/>
  
            <EventCard/>
    
        </div>
      </div>
    );
  }
}

>>>>>>> 5c4af10f4dbc2e8ad034d154c390a6e512ecb3d9
export default MainComponent;