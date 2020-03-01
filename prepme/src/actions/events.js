export default function addEvent(eventForm, events, username, setEvents, viewEvents) {
    const eventsList = events;
    const newEvent = {
        title: eventForm.state.course,
        purpose: eventForm.state.purpose,
        username: '@'+username,
        description: eventForm.state.description,
        location: eventForm.state.location
    };

    eventsList.push(newEvent);

    setEvents(eventsList);
    viewEvents();
}