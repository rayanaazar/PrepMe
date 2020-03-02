import React from "react";

import "./styles.css";
import EventCard from "../EventCard/index";
import { List, ListItem, ListItemText, ListItemIcon, Button} from '@material-ui/core'; 
import EventIcon from '@material-ui/icons/Event';
import Event from "../Event";
import { throwStatement } from "@babel/types";
import UserList from "../UserList";
import UserProfile from "../UserProfile";

/* Component for the main center component */
class MainComponent extends React.Component {

  state = {
    viewing: false,
    creating: false,
    editing: false,
    event: {}
  };

  createEvent = () => {
    this.props.setEventAction(true)
    this.setState({ creating: true })
  };

  viewEvents = () => {
      this.props.setEventAction(false)
      this.setState({
          viewing: false,
          creating: false,
          editing: false
      })
  };

  onViewing = (event) => {
    this.props.setEventAction(true)
    this.setState({
      viewing: true,
      creating: false,
      event: event
    })
  }

  onEditing = (event) => {

    this.props.setEventAction(true)
    this.setState({
      viewing: false,
      creating: false,
      editing: true,
      event: event
    })
  }

  joined = (event) => {

  }

  render() {
    const { username, user, events, setEvents, users, isAdmin, onEventsPage, setEventAction} = this.props

    if (isAdmin && !onEventsPage) {
      return <div className="main-component-div">
        <UserList users={users} />
      </div>
    }

    if (!isAdmin && !onEventsPage) {
      return <div className="main-component-div">
        <UserProfile user={user} events={events}/>
      </div>
    }

    if (this.state.creating) {
      return (<Event events={events} userName={username} setEvents={setEvents} viewEvents={this.viewEvents}/>)
    } else if (this.state.viewing || this.state.editing){
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
            username={username}
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