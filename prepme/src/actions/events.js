function getEvents(home, main) {
    const url = 'http://localhost:5000/events'; // This is only for dev purposes when react is running on a different port than the server
    // const url = '/events' // Switch to this line for actual build

    // Since this is a GET request, simply call fetch on the URL
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                alert("Could not get events");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            home.setState({
                events: json,
                filteredEvents: (home.state.appliedFilters.length !== 0) ? filterEvents(home.state.appliedFilters, json) : json
            }, () => main.render());
        })
        .catch(error => {
            console.log(error);
            home.setState({
                events: [],
                filteredEvents: []
            }, () => main.render());
        });
}

function addEvent(eventForm, events, username, setEvents, viewEvents) {
    const {course, subject, description, location, date, time, size} = eventForm.state;

    const newEvent = {
        course,
        subject,
        username,
        description,
        location,
        date,
        time,
        size,
        members: []
    };

    const url = 'http://localhost:5000/events'; // This is only for dev purposes when react is running on a different port than the server
    // const url = '/events' // Switch to this line for actual build

    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(newEvent),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(function (res) {
            // Handle response we get from the API.
            if (res.status === 200) {
                // If event was added successfully, go back to events page
                viewEvents();
            } else {
                // TODO: handle what happens if event wasn't added successfully.
            }
        })
        .catch(error => {
            console.log(error);
        });

    viewEvents();
}

function editEvent(eventForm, events, username, setEvents, viewEvents, event) {
    const event_id = event._id;

    const {course, subject, description, location, date, time, size} = eventForm.state;

    const edited_event = {
        course,
        subject,
        username,
        description,
        location,
        date,
        time,
        size,
        members: event.members
    };

    const url = `http://localhost:5000/events/${event_id}`; // This is only for dev purposes when react is running on a different port than the server
    // const url = '/events' // Switch to this line for actual build

    const request = new Request(url, {
        method: "PATCH",
        body: JSON.stringify(edited_event),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(function (res) {
            // Handle response we get from the API.
            if (res.status === 200) {
                // If event was added modified, go back to events page
                viewEvents();
            } else {
                // TODO: handle what happens if event wasn't added successfully.
            }
        })
        .catch(error => {
            console.log(error);
        });

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
                if (event.username == filters[i].values[j]) {
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
    getEvents,
    addEvent,
    filterEvents,
    filterUsers,
    editEvent
}