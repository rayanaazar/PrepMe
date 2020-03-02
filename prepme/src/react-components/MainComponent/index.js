import React from "react";

import "./styles.css";
import EventCard from "../EventCard/index";
import { List, ListItem, ListItemText, ListItemIcon, Button} from '@material-ui/core'; 
import EventIcon from '@material-ui/icons/Event';
import Event from "../Event";
import { throwStatement } from "@babel/types";

/* Component for the main center component */
class MainComponent extends React.Component {

  state = {
    viewing: false,
    creating: false,
    editing: false,
    event: {}
  };

  createEvent = () => {
    this.setState({ creating: true })
  };

  viewEvents = () => {
      this.setState({
          viewing: false,
          creating: false,
          editing: false
      })
  };

  onViewing = (event) => {
    this.setState({
      viewing: true,
      creating: false,
      event: event
    })
  }

  onEditing = (event) => {
    this.setState({
      viewing: false,
      creating: false,
      editing: true,
      event: event
    })
  }

  render() {
    const { username, events, setEvents} = this.props

    if (this.state.creating) {
      return (<Event events={events} userName={username} setEvents={setEvents} viewEvents={this.viewEvents}/>)
    }

    else if (this.state.viewing || this.state.editing){
      return (<Event editing={this.state.editing} viewing={this.state.viewing} event={this.state.event} events={events} userName={username} viewEvents={this.viewEvents}/>)
    }

    else {
    return (
      <div className="main-component-div">
        <div className="section-header" >
          <div className="section-name">
            Home
          </div>
          <div id='create-event'>
            <Button onClick={ () => { this.createEvent()}} variant="outlined" color="primary" size="medium">
              Create Event
            </Button>
          </div>
        </div>
        <div className="upcoming-events">
        Upcoming Events
        </div>
        <div className="event-list">
          {events.map(event => (
            <EventCard 
            onEditing={this.onEditing}
            onViewing={this.onViewing}
            event={event}/> 
          ))}
        </div>
      </div>
    );}
  }
}

export default MainComponent;