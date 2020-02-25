import React from "react";

import "./styles.css";
import { withRouter} from 'react-router-dom';

import Filter from '../Filter/index';

/* Component for the right SideBar page */
class RightSideBar extends React.Component {
  render() {
    let onEventsPage = false
    const path = this.props.location.pathname
    if (path == "/home" || path == "/home/events") {
      onEventsPage = true
    }
    
    return (
      <div className="sidebar-div">
        { onEventsPage ? (<Filter />) : (<div />) }
      </div>
    );
  }
}

export default withRouter(RightSideBar);