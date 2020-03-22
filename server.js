'use strict';
const log = console.log;
log('Express server');

const express = require('express');
const app = express();

// mongoose and mongo connection
const { mongoose } = require('./db/mongoose');
mongoose.set('useFindAndModify', false); // for some deprecation issues

const { Event } = require('./models/event');

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/events', (req, res) => {
    Event.find().then((events) => {
        res.send({ events }) // can wrap in object if want to add more properties
    }, (error) => {
        res.status(500).send(error) // server error
    })
});