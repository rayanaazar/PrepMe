import React from "react";

import "./styles.css";
import {TextField, Button} from '@material-ui/core';


/* Component for the main center component */
class Event extends React.Component {
    
    state = {
        
        isView:false,
        isEdit:false,
        isCreate:true,

        course:"",
        purpose:"",
        username:"",
        description:"",
        location:"",
        date:"",
        time:"",
        file: ""
    };

    handleInputChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };
    
    render() {
      const {event} = this.props;
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
                        value={this.state.course}
                        label="Course"
                        name='course'
                        type="search"
                        variant="outlined"
                        onChange={this.handleInputChange}/>
                    </div>
                </div>
                <div className="section">
                    <div className="section-name">
                        Subject:
                    </div>
                    <div className="purpose">
                        <TextField 
                            id="outlined-search"
                            value={this.state.purpose}
                            label="Purpose"
                            name='purpose'
                            type="search"
                            variant="outlined"
                            onChange={this.handleInputChange}/>
                    </div>
                </div>
                <div className="section">
                    <div className="section-name">
                        Location:
                    </div>
                    <div className="location">
                        <TextField
                            id="outlined-full-width"
                            value={this.state.location}
                            // style={{ margin: 8 }}
                            fullWidth
                            label="Location"
                            name='location'
                            type="search"
                            variant="outlined"
                            onChange={this.handleInputChange}/>
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
                    <TextField
                        value={this.state.description}
                        label="Description"
                        name='description'
                        fullWidth
                        multiline
                        type='text'
                        variant="outlined"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="section">
                    <div className="section-name">
                        Upload File:
                    </div>
                </div>
                <Button variant='outlined'>
                    Create Event
                </Button>
            </div>
        </div>
      );
    }
  }
  
  export default Event;