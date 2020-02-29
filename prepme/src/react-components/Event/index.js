import React from "react";

import "./styles.css";
import EventCard from "../EventCard/index";
import { List, ListItem, ListItemText, ListItemIcon, Button} from '@material-ui/core'; 
import EventIcon from '@material-ui/icons/Event';
import { file } from "@babel/types";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


/* Component for the main center component */
class Event extends React.Component {
    
    state = {
        
        isView:false,
        isEdit:false ,
        isCreate:true,

        info: {
            title:"",
            purpose:"",
            user:"",
            discription:"",
            location:"",
            date:"",
            time:"",
            file: ""
        }
    }
    
    render() {
      const {event} = this.props
      return (
        <div className="event-div">
            <div className="page-name">
                Event
            </div>
            <div className="form-components">
                <div className="section">
                    <div className="section-name">
                        Course:
                    </div>
                    <div className="course">
                    <TextField 
                    id="outlined-search" 
                    label="Course" 
                    type="search" 
                    variant="outlined"/>
                    </div>
                </div>
                <div className="section">
                    <div className="section-name">
                        Subject:
                    </div>
                    <div className="subject">
                        <TextField 
                        id="outlined-search" 
                        label="Subject" 
                        type="search" 
                        variant="outlined"/>
                    </div>
                </div>
                <div className="section">
                    <div className="section-name">
                        Location:
                    </div>
                    <div className="location">
                        <TextField 
                        id="outlined-search" 
                        style={{ margin: 8 }}
                        id="outlined-full-width"
                        fullWidth
                        label="Loaction" 
                        type="search" 
                        variant="outlined"/>   
                    </div>
       
                </div>
                <div  className="section">
                    <div className="section-name">
                        Group Size:
                    </div>
                    <div className="group-size">
                    </div>
                </div>
                <div className="section">
                    <div className="section-name">
                        Date:
                    </div>
                    <div className="date">
                    
                    </div>
                </div>
                <div className="section">
                    <div className="section-name">
                        Time:
                    </div>
                </div>
                <div  className="section">
                    <div className="section-name">
                        Description:
                    </div>
                </div>
                <div className="section">
                    <div className="section-name">
                        Upload File:
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Event;