'use strict';
const log = console.log;
log('Express server');

const express = require('express');
const app = express();

// mongoose and mongo connection
const { mongoose } = require('./db/mongoose');
mongoose.set('useFindAndModify', false); // for some deprecation issues

const { Event } = require('./models/event');
const { User } = require("./models/user");

// to validate object IDs
const { ObjectID } = require('mongodb')

const session = require("express-session"); 

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

/*** Session handling **************************************/
// Create a session cookie
app.use(
    session({
        secret: "raymanshay",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 180000,
            httpOnly: true
        }
    })
);

// A route to login and create a session
app.post("/users/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    log(username, password);
    // Use the static method on the User model to find a user
    // by their email and password
    User.findByUsernamePassword(username, password)
        .then(user => {
            // Add the user's id to the session cookie.
            // We can check later if this exists to ensure we are logged in.
            req.session.user = user._id;
            req.session.username = user.username;
            log(user)
            res.send(user);
        })
        .catch(error => {
            res.status(400).send()
        });
});

// A route to logout a user
app.get("/users/logout", (req, res) => {
    // Remove the session
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send()
        }
    });
});

// A route to check if a use is logged in on the session cookie
app.get("/users/check-session", (req, res) => {
    if (req.session.user) {
        res.send({ currentUser: req.session.username });
    } else {
        res.status(401).send();
    }
});

app.get('/events', (req, res) => {
    Event.find().then((events) => {
        res.send(events) // can wrap in object if want to add more properties
    }, (error) => {
        res.status(500).send(error) // server error
    })
});

app.post('/events', (req, res) => {
    const event = new Event(req.body);

    event.save().then((result) => {
        res.send(result)
    }, (error) => {
        res.status(400).send(error) // 400 for bad request
    })
});

app.patch('/events/:id', (req, res) => {
    const id = req.params.id;
    const event = req.body;

    if (!ObjectID.isValid(id)) {
        res.status(404).send();
        return;
    }

    // Update the event by its id.
    Event.findOneAndUpdate({_id: id}, {$set: event}, {new: true}).then((updatedEvent) => {
        if (!updatedEvent) {
            res.status(404).send()
        } else {
            res.send(updatedEvent)
        }
    }).catch((error) => {
        res.status(400).send() // bad request for changing the event.
    })
});

/** User routes below **/
// Set up a POST route to *create* a user of your web app (*not* a student).
app.post("/users", (req, res) => {
    log(req.body);

    // Create a new user
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    // Save the user
    user.save().then(
        user => {
            res.send(user);
        },
        error => {
            res.status(400).send(error); // 400 for bad request
        }
    );
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    log(`Listening on port ${port}...`)
});

