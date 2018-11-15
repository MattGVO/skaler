const express = require('express')
const massive = require('massive')
const session = require('express-session')
const apiCtrl = require('./apiCtrl')
require('dotenv').config();

const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const port = SERVER_PORT;

massive( CONNECTION_STRING ).then( db => app.set( 'db',db ))

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))

const apiUrl = '/api/'
// const authUrl = '/auth/'

app.post(`${apiUrl}getscale`, apiCtrl.getScale)

// app.get(`${apiUrl}getFret`, apiCtrl.getFret)

app.listen( port, () => console.log( `port ${port} is listening` ) );