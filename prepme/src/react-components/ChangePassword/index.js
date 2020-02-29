import React from 'react';

import './styles.css';
import { Button, Dialog, DialogContent, DialogContentText, DialogActions} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import LockIcon from '@material-ui/icons/Lock';

import PasswordEntry from './PasswordEntry/index';

/* Component to change password on user Profile page */
class ChangePassword extends React.Component {

  
  state = {
    changingPassword: false, // whether or not to show password fields

    // Keep track of values in input fields
    currentPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
    currShowPsw: false,
    newShowPsw: false,
    confShowPsw: false,

    showDialog: false // show 'password saved' dialog
  }

  openPasswordChange = () => {
    this.setState({ changingPassword: true })
  }

  onCurrPswChange = e => {
    const { value } = e.target
    this.setState({ currentPassword: value })
  }

  onNewPswChange = e => {
    const { value } = e.target
    this.setState({ newPassword: value })
  }

  onConfirmPswChange = e => {
    const { value } = e.target
    this.setState({ newPasswordConfirm: value })
  }

  toggleShowCurrPsw = () => { this.setState({ currShowPsw: !this.state.currShowPsw }) }
  toggleShowNewPsw = () => { this.setState({ newShowPsw: !this.state.newShowPsw }) }
  toggleShowConfPsw= () => { this.setState({ confShowPsw: !this.state.confShowPsw })}

  // Called when Save is clicked to reset fields and display dialog
  clearEntries = () => {
    this.setState({
      changingPassword: false,
      currentPassword: "",
      newPassword: "",
      newPasswordConfirm: "",
      currShowPsw: false,
      newShowPsw: false,
      confShowPsw: false,

      showDialog: true
    })
  }

  closeDialog = () => {
    this.setState({ showDialog: false })
  }

  render() {
    const { doChangePassword } = this.props

    return ( 
      <div>
        { this.state.changingPassword ? (
          <div>
            <div id="title">Change Password</div>
            <PasswordEntry 
              label="Current Password"
              value={ this.state.currentPassword }
              showPsw={ this.state.currShowPsw }
              toggleShowPsw={ this.toggleShowCurrPsw }
              onChange={ this.onCurrPswChange }
            />
            <PasswordEntry 
              label="New Password"
              value={ this.state.newPassword }
              showPsw={ this.state.newShowPsw }
              toggleShowPsw={ this.toggleShowNewPsw }
              onChange={ this.onNewPswChange }
            />
            <PasswordEntry 
              label="Re-enter Password"
              value={ this.state.newPasswordConfirm }
              showPsw={ this.state.confShowPsw }
              toggleShowPsw={ this.toggleShowConfPsw }
              onChange={ this.onConfirmPswChange }
            />
            <div id="save-button">
              <Button
                variant="contained"
                color="primary"
                onClick={ () => { doChangePassword(); this.clearEntries(); } }
                startIcon={ <SaveIcon /> }
              >
                Save
              </Button>
            </div>
          </div>
        ) : (
          <Button
            variant="contained"
            color="primary"
            fullWidth={ true }
            onClick={ this.openPasswordChange }
            startIcon={ <LockIcon /> }
          >
            Change Password
          </Button>
        )}

        {/* Dialog to say password saved successfully, could move into a higher level component that actually saves password */}
        <Dialog
          open={ this.state.showDialog }
          onRequestClose={ this.closeDialog }
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Password Saved Successfully.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={ this.closeDialog } color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default ChangePassword;
