import React from "react";

import "./styles.css";
import { withRouter} from 'react-router-dom';

import Filter from '../Filter/index';

/* Component for the right SideBar page */
class RightSideBar extends React.Component {
  state = {
    onEventsPage: true,
    /* Entry Info
        title         the title of the filter entry, used as a label 
        isDropdown    whether or not it's a dropdown filter
        options       options that are available to filter on (used in dropdown)
        applied       filters that have been applied already
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

  render() {
    const { isAdmin } = this.props
    
    this.state.onEventsPage = false
    const path = this.props.location.pathname
    if (path == "/home" || path == "/home/events") {
      this.state.onEventsPage = true
    }
    
    return (
      <div className="sidebar-div">
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
              />) : (<div />))
        }
      </div>
    );
  }
}

export default withRouter(RightSideBar);