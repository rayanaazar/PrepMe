import React from "react";

import "./styles.css";
import { Button } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';

/* Component to show Cancel and Save Event buttons in the RightSideBar */
class CancelAndSaveEvent extends React.Component { 

  render() {
    // TODO: implement functions
    // const { doCancel, doSave } = this.props

    return (
      <div id="cancel-save-buttons-div">
        <div id="cancel-button">
          <Button
            variant="contained"
            color="secondary"
            fullWidth={ true }
            // onClick={ doCancel }
            startIcon={<CancelIcon />}
          >
            Cancel
          </Button>
        </div>
        
        <Button
          variant="contained"
          color="primary"
          // onClick={ doSave }
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </div>
    );
  }
}

export default CancelAndSaveEvent;