function addEvent(eventForm, events, username, setEvents, viewEvents) {
    const eventsList = events;
    const newEvent = {
        course: eventForm.state.course,
        subject: eventForm.state.subject,
        username: '@'+username,
        description: eventForm.state.description,
        location: eventForm.state.location
    };

    eventsList.push(newEvent);

    setEvents(eventsList);
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

export default {
    addEvent: addEvent, 
    filterEvents: filterEvents
}