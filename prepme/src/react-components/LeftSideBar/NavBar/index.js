import React from 'react';

import './styles.css';

import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core"; 
import EventIcon from '@material-ui/icons/Event';
import PeopleIcon from '@material-ui/icons/People';

/* React Component to represent NavBar that's displayed on admin page */
class NavBar extends React.Component {

    render() {
      const { onEventsPage } = this.props

      return (
        <div className="nav-bar">
          <List>
            <ListItem 
              button={ true }
              divider={ true }
              selected={ onEventsPage }
              key={"Events"}
            >
              <ListItemIcon>{<EventIcon color="primary" />}</ListItemIcon>
              <ListItemText primary={"Events"} />
            </ListItem>
            <ListItem 
              button={ true } 
              selected={ !onEventsPage }
              key={"Users"}
            >
              <ListItemIcon>{<PeopleIcon color="primary" />}</ListItemIcon>
              <ListItemText primary={"Users"} />
            </ListItem>
          </List>
        </div>
      );
    }
}

export default NavBar;
