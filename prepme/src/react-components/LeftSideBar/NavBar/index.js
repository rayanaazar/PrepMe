import React from 'react';

import './styles.css';

import { withRouter, Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'; 
import EventIcon from '@material-ui/icons/Event';
import PeopleIcon from '@material-ui/icons/People';

/* React Component to represent NavBar that's displayed on admin page */
class NavBar extends React.Component {

    render() {
      const { isAdmin } = this.props

      const secondLink = {
        link: '/home/profile',
        name: 'Profile'
      }
      if (isAdmin) {
        secondLink.link = '/home/users'
        secondLink.name = 'Users'
      }

      let onEventsPage = false
      const path = this.props.location.pathname
      if (path == "/home" || path == "/home/events") {
        onEventsPage = true
      }

      return (
        <div className="nav-bar">
          <List>
            <Link class="unstyled-link" to="/home/events">
              <ListItem 
                button={ true }
                divider={ true }
                selected={ onEventsPage }
                key={"Events"}
              >
                <ListItemIcon>{<EventIcon color="primary" />}</ListItemIcon>
                <ListItemText primary={"Events"} />
              </ListItem>
            </Link>
            <Link class="unstyled-link" to={ secondLink.link }>
              <ListItem 
                button={ true } 
                selected={ !onEventsPage }
                key={"Users"}
              >
                <ListItemIcon>{<PeopleIcon color="primary" />}</ListItemIcon>
                <ListItemText primary={ secondLink.name } />
              </ListItem>
            </Link>
            
          </List>
        </div>
      );
    }
}

export default withRouter(NavBar);
