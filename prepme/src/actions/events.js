function addEvent(eventForm, events, username, setEvents, viewEvents) {
    const eventsList = events;
    const newEvent = {
        course: eventForm.state.course,
        subject: eventForm.state.subject,
        username: '@'+username,
        description: eventForm.state.description,
        location: eventForm.state.location,
        members: []
    };

    eventsList.push(newEvent);

    setEvents(eventsList);
    viewEvents();
}

function editEvent(eventForm, events, username, setEvents, viewEvents, event) {
    const eventsList = events;
    console.log(eventsList)
    
    const indx = eventsList.indexOf(event)
    const edited_event = eventsList[indx]
    
    edited_event.course = eventForm.state.course
    edited_event.subject = eventForm.state.subject
    edited_event.description = eventForm.state.description
    edited_event.location = eventForm.state.location

    viewEvents();
}

function eventMatchesFilters(filters, event) {
    // Loop through all filters
    for (let i=0; i < filters.length; i++) {
        if (filters[i].name == "Courses") {
            // Iterate through all filtered courses
            for (let j=0; j < filters[i].values.length; j++) {
                if (event.course == filters[i].values[j]) {
                    return true
                }
            }
        } else if (filters[i].name == "Username") {
            // Iterate through all filtered usernames
            for (let j=0; j < filters[i].values.length; j++) {
                if (event.username.substr(1) == filters[i].values[j]) {
                    return true
                }
            }
        } else if (filters[i].name == "Group Size") {
            // Iterate through all filtered Group Sizes
            for (let j=0; j < filters[i].values.length; j++) {
                if (event.size == filters[i].values[j]) {
                    return true
                }
            }
        }
    }

    return false
}

function filterEvents(filters, events) {
    return events.reduce((filteredEvents, event) => {
        if (eventMatchesFilters(filters, event)) {
            filteredEvents.push(event)
        }
        return filteredEvents
    }, [])
}

function userMatchesFilters(filters, user) {
    // Loop through all filters
    for (let i=0; i < filters.length; i++) {
        if (filters[i].name == "Username") {
            // Iterate through all filtered usernames
            for (let j=0; j < filters[i].values.length; j++) {
                if (user.username == filters[i].values[j]) {
                    return true
                }
            }
        } else if (filters[i].name == "Rating") {
            // Iterate through all filtered Rating
            for (let j=0; j < filters[i].values.length; j++) {
                if (user.rating == filters[i].values[j]) {
                    return true
                }
            }
        }
    }

    return false
}

function filterUsers(filters, users) {
    return users.reduce((filteredUsers, user) => {
        if (userMatchesFilters(filters, user)) {
            filteredUsers.push(user)
        }
        return filteredUsers
    }, [])
}

export default {
    addEvent: addEvent, 
    filterEvents: filterEvents,
    filterUsers: filterUsers,
    editEvent: editEvent
}