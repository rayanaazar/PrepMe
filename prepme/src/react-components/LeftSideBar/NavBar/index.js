import React from 'react';

import './styles.css';
import "../../../App.css";

import { withRouter, Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'; 
import EventIcon from '@material-ui/icons/Event';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

/* React Component to represent NavBar that's displayed on admin page */
class NavBar extends React.Component {

    render() {
      const { isAdmin } = this.props

      // Determine values of each link
      const linkInfo = [
        { link: '/home/events', name: 'Home', icon: <HomeIcon color="primary"/> },
        { link: '/home/profile', name: 'Profile', icon: <AccountCircleIcon color="primary"/> }
      ]
      if (isAdmin) {
        linkInfo[0] = { link: '/home/events', name: 'Events', icon: <EventIcon color="primary"/> }
        linkInfo[1] = { link: '/home/users', name: 'Users', icon: <PeopleIcon color="primary"/> }
      }

      // Depending on the routing path we can determine if we're on an events page
      let onEventsPage = false
      const path = this.props.location.pathname
      if (path == "/home" || path == "/home/events") {
        onEventsPage = true
      }

      return (
        <div className="nav-bar">
          <List>
            <Link class="unstyled-link" to={ linkInfo[0].link }>
              <ListItem 
                button={ true }
                divider={ true }
                selected={ onEventsPage }
                key={"Events"}
              >
                <ListItemIcon>{ linkInfo[0].icon }</ListItemIcon>
                <ListItemText primary={ linkInfo[0].name } />
              </ListItem>
            </Link>
            <Link class="unstyled-link" to={ linkInfo[1].link }>
              <ListItem 
                button={ true } 
                selected={ !onEventsPage }
                key={"Users"}
              >
                <ListItemIcon>{ linkInfo[1].icon }</ListItemIcon>
                <ListItemText primary={ linkInfo[1].name } />
              </ListItem>
            </Link>
            
          </List>
        </div>
      );
    }
}

export default withRouter(NavBar);
