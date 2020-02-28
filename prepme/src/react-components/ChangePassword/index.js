import React from 'react';

import './styles.css';
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import LockIcon from '@material-ui/icons/Lock';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class ChangePassword extends React.Component {

  state = {
    changingPassword: false,
    currentPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
    currShowPsw: false,
    newShowPsw: false,
    confShowPsw: false,

    showDialog: false
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
    // const { doPasswordChange } = this.props

    return ( 
      <div>
        { this.state.changingPassword ? (
          <div>
            <div id="title">Change Password</div>
            <div className="field">
              <TextField 
                label="Current Password"
                variant="outlined"
                type={ this.state.currShowPsw ? "text" : "password" }
                fullWidth={ true }
                onChange={ this.onCurrPswChange }
                value={ this.state.currentPassword }
                InputProps={{ endAdornment: 
                  <InputAdornment position="end">
                    <IconButton
                      onClick={ this.toggleShowCurrPsw }
                      edge="end"
                    >
                      {this.state.currShowPsw ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment> 
                }}
              />
            </div>
            <div className="field">
              <TextField 
                label="New Password"
                variant="outlined"
                type={ this.state.newShowPsw ? "text" : "password" }
                fullWidth={ true }
                onChange={ this.onNewPswChange }
                value={ this.state.newPassword }
                InputProps={{ endAdornment: 
                  <InputAdornment position="end">
                    <IconButton
                      onClick={ this.toggleShowNewPsw }
                      edge="end"
                    >
                      {this.state.newShowPsw ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment> 
                }}
              />
            </div>
            <div className="field">
              <TextField 
                label="Re-enter New Password"
                variant="outlined"
                type={ this.state.confShowPsw ? "text" : "password" }
                fullWidth={ true }
                onChange={ this.onConfirmPswChange }
                value={ this.state.newPasswordConfirm }
                InputProps={{ endAdornment: 
                  <InputAdornment position="end">
                    <IconButton
                      onClick={ this.toggleShowConfPsw }
                      edge="end"
                    >
                      {this.state.confShowPsw ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment> 
                }}
              />
            </div>
            <div id="save-button">
              <Button
                variant="contained"
                color="primary"
                // onClick={ () => { doPasswordChange(); this.clearEntries(); } }
                onClick={ () => { this.clearEntries(); } }
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

