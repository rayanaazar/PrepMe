import React from "react";

import "./styles.css";
import { Redirect } from 'react-router-dom';
import LeftSideBar from "../LeftSideBar/index";
import MainComponent from "../MainComponent/index";
import RightSideBar from "../RightSideBar/index";
import eventHelpers from "../../actions/events";
const { filterEvents, filterUsers } = eventHelpers


/* Component for the Home page */
class Home extends React.Component {
  constructor(props) {
    super(props)
    const { events, users } = this.props.state
    this.state.filteredEvents = events
    this.state.filteredUsers = users
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
      const filtered = filterEvents(filters, this.props.state.events)
      this.setState({ filteredEvents: filtered })
    }
    this.setState({ appliedFilters: filters })
  }

  // Called when Clear Filters button is pressed, clears all applied filters
  resetFilters = () => {
    this.setState({
      appliedFilters: [],
      filteredEvents: this.props.state.events,
      filteredUsers: this.props.state.users
    })
  }

  setOnEventsPage = (newValue) => {
    this.setState({ onEventsPage: newValue })
  }

  render() {
    const { state, doLogout, doChangePassword } = this.props
    const { isLoggedIn, username, isAdmin, users } = state
    if (!isLoggedIn) return <Redirect to='/login' />

    return (
      <div className="home-div">
        <LeftSideBar 
          username={ username }
          isAdmin={ isAdmin } 
          doLogout={ doLogout }
          onEventsPage={ this.state.onEventsPage }
          setOnEventsPage={ this.setOnEventsPage }
        />
      
        <MainComponent
          username={username}
          user={users.filter(user => user.username === username)[0]}
          events={this.state.filteredEvents}
          setEvents = {this.props.setEvents}
          users={ this.state.filteredUsers }
          isAdmin={ isAdmin }
          onEventsPage={ this.state.onEventsPage }
          setEventAction={this.setEventAction}
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