const path = require('path');
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const apiCtrl = require('./apiCtrl')
const authCtrl = require('./authCtrl')
require('dotenv').config();

const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const port = SERVER_PORT;

massive( CONNECTION_STRING ).then( db => app.set( 'db',db ))

app.use( express.static( `${__dirname}/../build` ) )
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))

const apiUrl = '/api/'
const authUrl = '/auth/'

app.post(`${apiUrl}getscale`, apiCtrl.getScale)

app.post(`${apiUrl}getfret`, apiCtrl.getFret)

app.post(`${apiUrl}getrootnote`, apiCtrl.getRootNote)

app.post(`${authUrl}signup`, authCtrl.signup)

app.post(`${authUrl}login`, authCtrl.login)

app.get(`${authUrl}user-data`,authCtrl.userData)

app.get(`${authUrl}logout`,authCtrl.logout)

app.post(`${apiUrl}get-all-tunings`, apiCtrl.getAllTunings)

app.post(`${apiUrl}get-tuning`, apiCtrl.getTuning)

app.post(`${apiUrl}save-tuning`, apiCtrl.saveTuning)

app.delete(`${apiUrl}delete-tuning/:id`, apiCtrl.deleteTuning)

app.put(`${apiUrl}update-db-tuning/:user`, apiCtrl.updateDbTuning)

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen( port, () => console.log( `port ${port} is listening` ) );