import React from "react";

import "./styles.css";

import Filter from '../Filter/index';

/* Component for the right SideBar page */
class RightSideBar extends React.Component {
  render() {
    const { onEventsPage } = this.props;
    
    return (
      <div className="sidebar-div">
        { onEventsPage ? (<Filter />) : (<div />)}
      </div>
    );
  }
}

export default RightSideBar;