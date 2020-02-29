import React from "react";

import "./styles.css";
import EventCard from "../EventCard/index";
import { List, ListItem, ListItemText, ListItemIcon, Button} from '@material-ui/core'; 
import EventIcon from '@material-ui/icons/Event';
import Event from "../Event";

/* Component for the main center component */
class MainComponent extends React.Component {

  state = {
    viewing: false,
    creating: false,

  }

  create = () => {
    this.setState({ creating: true })
    }

  render() {
    const { title, username, description, icon, events} = this.props

    if (this.state.creating) {
      return (<Event/>)
    }

    else {
    return (
      <div className="main-component-div">
        <div className="section-header" >
          <div className="section-name">
            Home
          </div>
          <div id='create-event'>
            <Button onClick={ () => { this.create()}} variant="outlined" color="primary" size="medium">
              Create Event
            </Button>
          </div>
        </div>
        <div className="upcomming-events">
        Upcomming Events
        </div>
        <div className="event-list">
          {events.map(event => (
            <EventCard 
            event={event}/> 
          ))}
        </div>
      </div>
    );}
  }
}

export default MainComponent;