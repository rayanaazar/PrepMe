import React from 'react';

import './UserCard.css';

import StarRateIcon from '@material-ui/icons/StarRate';

class UserCard extends React.Component {
  render() {
    const { username, rating } = this.props
    let stars = []
    for (let i=0; i < rating; i++) {
      stars.push(<StarRateIcon />)
    }

    return (
      <div className="user-card">
        <div className="username">@{username}</div>
        <div>{ stars }</div>
      </div>
    )
  }
}

export default UserCard;