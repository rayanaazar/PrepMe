import React from "react";

import "./styles.css";

import Filter from '../Filter/index';
import ChangePassword from '../ChangePassword/index';
import CancelAndSaveEvent from '../CancelAndSaveEvent/index';

/* Component for the right SideBar page */
class RightSideBar extends React.Component {
  state = {
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

  addSelection = (onEventsPage, title, value) => {
    if (value == "") {
      return 
    }
    // Assume event and user entries don't have the same title
    let entries = this.state.userEntries
    if (onEventsPage) {
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

  clearSelections = (onEventsPage) => {
    // Assume event and user entries don't have the same title
    let entries = this.state.userEntries
    if (onEventsPage) {
      entries = this.state.eventEntries
    }

    // Empty all applied lists in filter entries
    for (let i=0; i < entries.length; i++) {
      entries[i].applied = []
    }
    
    this.setState({entries})
  }

  // TODO: implement this in a higher level component and pass it down
  doChangePassword = () => {}

  render() {
    const { isAdmin, onEventsPage, editingEvent } = this.props

    let mainElement;

    // Determine which element to display depending on current state of props
    if (editingEvent) {
      mainElement =  <CancelAndSaveEvent />
    } else {
      if (onEventsPage) {
        mainElement =  <Filter 
            entries={ this.state.eventEntries } 
            addSelection={ () => this.addSelection(onEventsPage) } 
            clearSelections={ () => this.clearSelections(onEventsPage) }
        />
      } else {
        if (isAdmin) {
          mainElement =  <Filter 
              entries={ this.state.userEntries } 
              addSelection={ () => this.addSelection(onEventsPage) }
              clearSelections={ this.clearSelections(onEventsPage) }
          />
        } else {
          mainElement =  <ChangePassword doChangePassword={ this.doChangePassword }/>
        }
      }
    }

    return (
      <div className="sidebar-div">
        { mainElement }
      </div>
    );
  }
}

export default RightSideBar;