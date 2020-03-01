import React from "react";

import "./styles.css";
import { Redirect } from 'react-router-dom';
import LeftSideBar from "../LeftSideBar/index";
import MainComponent from "../MainComponent/index";
import RightSideBar from "../RightSideBar/index";
import eventHelpers from "../../actions/events";
const { filterEvents } = eventHelpers


/* Component for the Home page */
class Home extends React.Component {
  constructor(props) {
    super(props)
    const { events } = this.props.state
    this.state.filteredEvents = events
    this.state.fullEvents = events
  }
  
  state = {
    onEventsPage: true,
    editingEvent: false,
    /*
    appliedFilters is list of objects with a name and list of values
      - names are taken from eventEntries and userEntries in RightSideBar Component
    Eg: [
      {"Courses": ["CSC309", "CSC369"]},
      {"Semester": ["fall"]}
    ]
    */
    appliedFilters: [],
    fullEvents: [],
    filteredEvents: []
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

    console.log(filterEvents)
    const filtered = filterEvents(filters, this.props.state.events)

    this.setState({ filteredEvents: filtered })
    this.setState({ appliedFilters: filters })
  }

  // Called when Clear Filters button is pressed, clears all applied filters
  resetFilters = () => {
    this.setState({
      appliedFilters: [],
      filteredEvents: this.props.state.events
    })
  }

  setOnEventsPage = (newValue) => {
    this.setState({ onEventsPage: newValue })
  }

  render() {
    const { state, doLogout, doChangePassword } = this.props
    const { isLoggedIn, username, isAdmin, events } = state
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
          events={this.state.filteredEvents}
          setEvents = {this.props.setEvents}
        />

        <RightSideBar 
          isAdmin={ isAdmin } 
          onEventsPage={ this.state.onEventsPage }
          editingEvent={ this.state.editingEvent }
          doChangePassword={ doChangePassword }
          addFilter={ this.addFilter }
          resetFilters={ this.resetFilters }
        />
      </div>
    );
  }
}

export default Home;