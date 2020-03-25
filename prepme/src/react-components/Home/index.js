import React from "react";

import "./styles.css";
import { Redirect } from 'react-router-dom';
import LeftSideBar from "../LeftSideBar/index";
import MainComponent from "../MainComponent/index";
import RightSideBar from "../RightSideBar/index";
import { getUsersNameAndRating } from "../../actions/users";
import eventHelpers from "../../actions/events";
const { filterEvents, filterUsers, getEvents } = eventHelpers;


/* Component for the Home page */
class Home extends React.Component {
  constructor(props) {
    super(props);
    getUsersNameAndRating(this);
    // const {  users } = this.props.state;
    // this.state.filteredUsers = users;
  }
  
  state = {
    onEventsPage: true,
    eventAction: false, // whether or not we're doing an action on an event; so creating, editing, viewing
    /*
    appliedFilters is list of objects with a name and list of values
      - names are taken from eventEntries and userEntries in RightSideBar Component
    Eg: [
      {"Courses": ["CSC309", "CSC369"]},
      {"Semester": ["fall"]}
    ]
    */
    events: [],
    users: [],
    appliedFilters: [],
    filteredEvents: [],
    filteredUsers: []
  }

  setEventAction = (b) => {
    this.setState({ eventAction: b})
  }

  // Add a new applied filter to state.appliedFilters
  // updated state.filteredEvents with new filters
  addFilter = (name, value) => {
    const filters = this.state.appliedFilters
    let nameFound = false
    for (let i=0; i < filters.length; i++) {
      if (name === filters[i].name) {
        if (filters[i].values.indexOf(value) < 0) {
          filters[i].values.push(value)
        }
        nameFound = true
      }
    }

    if (!nameFound) {
      const newNameFilter = {
        name: name,
        values: [value]
      }
      filters.push(newNameFilter)
    }

    if (!this.state.onEventsPage) {
      const filtered = filterUsers(filters, this.props.state.users)
      this.setState({ filteredUsers: filtered })
    } else {
      const filtered = filterEvents(filters, this.state.events)
      this.setState({ filteredEvents: filtered })
    }
    this.setState({ appliedFilters: filters })
  }

  // Called when Clear Filters button is pressed, clears all applied filters
  resetFilters = () => {
    this.setState({
      appliedFilters: [],
      filteredEvents: this.state.events,
      filteredUsers: this.props.state.users
    })
  }

  refreshEvents = (main) => {
    getEvents(this, main);
  };

  setOnEventsPage = (newValue) => {
    this.setState({ onEventsPage: newValue })
  }

  render() {
    const { app, state, doChangePassword, adminChangePassword } = this.props
    const { currentUser, isAdmin } = state

    return (
      <div className="home-div">
        <LeftSideBar 
          app={ app }
          username={ currentUser }
          isAdmin={ isAdmin }
          onEventsPage={ this.state.onEventsPage }
          setOnEventsPage={ this.setOnEventsPage }
        />
      
        <MainComponent
          user={this.state.users.filter(user => user.username === currentUser)[0]}
          rating
          filteredEvents={this.state.filteredEvents}
          events={this.state.events}
          refreshEvents={this.refreshEvents}
          setEvents = {this.props.setEvents}
          users={ this.state.filteredUsers }
          isAdmin={ isAdmin }
          onEventsPage={ this.state.onEventsPage }
          setEventAction={this.setEventAction}
          adminChangePassword={adminChangePassword}
        />

        <RightSideBar 
          isAdmin={ isAdmin } 
          onEventsPage={ this.state.onEventsPage }
          eventAction={ this.state.eventAction }
          doChangePassword={ doChangePassword }
          addFilter={ this.addFilter }
          resetFilters={ this.resetFilters }
        />
      </div>
    );
  }
}

export default Home;