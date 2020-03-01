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
    event: {}
  };

  createEvent = () => {
    this.setState({ creating: true })
  };

  viewEvents = () => {
      this.setState({
          viewing: false,
          creating: false
      })
  };

  onViewing = (event) => {
    this.setState({
      viewing: true,
      creating: false,
      event: event
    })
  }

  render() {
    const { username, events, setEvents} = this.props

    if (this.state.creating) {
      return (<Event events={events} userName={username} setEvents={setEvents} viewEvents={this.viewEvents}/>)
    }

    else if (this.state.viewing){
      return (<Event viewing={true} event={this.state.event} events={events} userName={username} viewEvents={this.viewEvents}/>)
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
            onViewing={this.onViewing}
            event={event}/> 
          ))}
        </div>
      </div>
    );}
  }
}

export default MainComponent;