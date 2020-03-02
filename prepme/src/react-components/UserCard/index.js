import React from 'react';

import './UserCard.css';

import { Button, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle, TextField } from '@material-ui/core';
import StarRateIcon from '@material-ui/icons/StarRate';
import LockIcon from '@material-ui/icons/Lock';

class UserCard extends React.Component {
  state = {
    showDialog: false,
    newPsw: ""
  }

  handleInputChange = e => {
    const { value } = e.target
    this.setState({ newPsw: value })
  }

  openDialog = () => {
    this.setState({ showDialog: true })
  }

  closeDialog = () => {
    this.setState({ showDialog: false })
  }

  render() {
    const { username, rating, adminChangePassword } = this.props
    let stars = []
    for (let i=0; i < rating; i++) {
      stars.push(<StarRateIcon />)
    }

    return (
      <div className="user-card">
        <div className="username">@{username}</div>
        <div className="star-rating">{ stars }</div>
        <Button
          variant="contained"
          color="primary"
          onClick={ this.openDialog }
          startIcon={ <LockIcon /> }
        >
          Change Password
        </Button>

        <Dialog open={ this.state.showDialog }>
        <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the new password for @{username}.
          </DialogContentText>
          <TextField
            autoFocus
            label="New Password"
            type="password"
            value={this.state.newPsw}
            onChange={this.handleInputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.closeDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {this.closeDialog(); adminChangePassword(username, this.state.newPsw)}} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    )
  }
}

export default UserCard;