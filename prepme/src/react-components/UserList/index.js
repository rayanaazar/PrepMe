import React from 'react';

import './UserList.css';

import UserCard from '../UserCard/index';

class UserList extends React.Component {
  render() {
    const { users, adminChangePassword } = this.props
    const nonAdmins = users.filter(user => !user.isAdmin)
    return (<div>
      <div className="section-header" >
        <div className="section-name">
          Users
        </div>
      </div>
      <div className="user-list">
        {nonAdmins.map(user => (
          <UserCard username={ user.username } rating={ user.rating } adminChangePassword={adminChangePassword}/>
        ))}
      </div>
    </div>
      
    )
  }
}

export default UserList;