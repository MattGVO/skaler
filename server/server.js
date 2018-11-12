const express = require('express')
const massive = require('massive')
const session = require('express-session')
require('dotenv').config();

const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const port = SERVER_PORT;

massive( CONNECTION_STRING ).then( db => {app.set( 'db',db )})

app.listen( port, () => console.log( `port ${port} is listening` ) );