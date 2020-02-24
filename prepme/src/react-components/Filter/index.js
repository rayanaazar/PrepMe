import React from "react";
import { uid } from "react-uid";

import "./styles.css";

import FilterEntry from './FilterEntry/index';

/* Component for the Filter in the RightSideBar */
class Filter extends React.Component {
  // Might have to move these state entries into a parent component
  state = {
    /* Entry Info
        title         the title of the filter entry, used as a label 
        isDropdown    whether or not it's a dropdown filter
        options       options that are available to filter on (used in dropdown)
        applied       filters that have been applied already
    */
    entries:  [
      {
        title: "Courses",
        isDropdown: false,
        options: [], 
        applied: []
      },
      {
        title: "Semester ",
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
    ]
  }

  addSelection = (title, value) => {
    const entries = this.state.entries

    // Find the filter entry that matches the title
    // and add value to the applied list
    for (let i=0; i < entries.length; i++) {
      if (entries[i].title == title && !entries[i].applied.includes(value)) {
        entries[i].applied.push(value)
      }
    }
    this.setState({entries})
  }

  render() {
   
    return (
      <div className="filter-div">
        <div className="title">Filters</div>
        <div className="filter-entries">
          {this.state.entries.map(entry => (
              <FilterEntry
                key={ uid(entry) }
                entry={ entry }
                addSelection={ this.addSelection }/>
            ))}
        </div>
      </div>
    );
  }
}

export default Filter;