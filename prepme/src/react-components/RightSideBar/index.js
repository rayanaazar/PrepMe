import React from "react";

import "./styles.css";
import { withRouter} from 'react-router-dom';

import Filter from '../Filter/index';
import ChangePassword from '../ChangePassword/index';
import CancelAndSaveEvent from '../CancelAndSaveEvent/index';

/* Component for the right SideBar page */
class RightSideBar extends React.Component {
  state = {
    onEventsPage: true, // whether we're on a page with events so we can add a filter, may move to a higher component
    editingEvent: false, // whether we're currently editing an event, will probably move to a higher component
    /* Entry Info
        title         the title of the filter entry, used as a label 
        isDropdown    whether or not it's a dropdown filter
        options       options that are available to filter on (used in dropdown)
        applied       filters that have been applied already

      NOTE: No event or user entries can have the same title
    */
    eventEntries:  [
      {
        title: "Courses",
        isDropdown: false,
        options: [], 
        applied: []
      },
      {
        title: "Semester",
        isDropdown: true,
        options: ["fall", "winter"],
        applied: []
      },
      {
        title: "Group Size",
        isDropdown: true,
        options: ["1-5", "6-10", "11-15", "16-20"],
        applied: []
      }
    ],
    userEntries:  [
      {
        title: "Username",
        isDropdown: false,
        options: [], 
        applied: []
      },
      {
        title: "Rating",
        isDropdown: true,
        options: ["1", "2", "3", "4", "5"],
        applied: []
      },
    ]
  }

  addSelection = (title, value) => {
    if (value == "") {
      return 
    }
    // Assume event and user entries don't have the same title
    let entries = this.state.userEntries
    if (this.state.onEventsPage) {
      entries = this.state.eventEntries
    }
    
    // Find the filter entry that matches the title
    // and add value to the applied list
    for (let i=0; i < entries.length; i++) {
      if (entries[i].title == title && !entries[i].applied.includes(value)) {
        entries[i].applied.push(value)
      }
    }
    
    this.setState({entries})
  }

  clearSelections = () => {
    // Assume event and user entries don't have the same title
    let entries = this.state.userEntries
    if (this.state.onEventsPage) {
      entries = this.state.eventEntries
    }

    // Empty alll applied lists in filter entries
    for (let i=0; i < entries.length; i++) {
      entries[i].applied = []
    }
    
    this.setState({entries})
  }

  // TODO: implemented this in a higher level component and pass it down
  doChangePassword = () => {}

  render() {
    const { isAdmin } = this.props
    
    // Based on routing path, we can determine if we're on an events page
    const path = this.props.location.pathname
    if (path == "/home" || path == "/home/events") {
      this.state.onEventsPage = true
    } else {
      this.state.onEventsPage = false
    }

    let elem = this.state.onEventsPage 
      ? (<Filter 
            entries={ this.state.eventEntries } 
            addSelection={ this.addSelection } 
            clearSelections={ this.clearSelections }
        />) 
      : (isAdmin ? (
          <Filter 
            entries={ this.state.userEntries } 
            addSelection={ this.addSelection }
            clearSelections={ this.clearSelections }
        />) : (
          <ChangePassword doChangePassword={ this.doChangePassword }/>
        )
      )

    if (this.state.editingEvent) {
      elem = <CancelAndSaveEvent />
    }
    
    return (
      <div className="sidebar-div">
        { elem }
        {/* { this.state.editingEvent 
          ? (

          )
          :
        }
        { this.state.onEventsPage 
          ? (<Filter 
                entries={ this.state.eventEntries } 
                addSelection={ this.addSelection } 
                clearSelections={ this.clearSelections }
            />) 
          : (isAdmin ? (
              <Filter 
                entries={ this.state.userEntries } 
                addSelection={ this.addSelection }
                clearSelections={ this.clearSelections }
            />) : (
              <ChangePassword doChangePassword={ this.doChangePassword }/>
            ))
        } */}
      </div>
    );
  }
}

export default withRouter(RightSideBar);