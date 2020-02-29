import React from "react";

import "./styles.css";
import { Redirect } from 'react-router-dom';
import LeftSideBar from "../LeftSideBar/index";
import MainComponent from "../MainComponent/index";
import RightSideBar from "../RightSideBar/index";

/* Component for the Home page */
class Home extends React.Component {
  state = {
    onEventsPage: true,
    editingEvent: false
  }

  setOnEventsPage = (newValue) => {
    this.setState({ onEventsPage: newValue })
  }

  render() {
    const { state, doLogout } = this.props
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
          events={events}
        />

        <RightSideBar 
          isAdmin={ isAdmin } 
          onEventsPage={ this.state.onEventsPage }
          editingEvent={ this.state.editingEvent }
        />
      </div>
    );
  }
}

export default Home;