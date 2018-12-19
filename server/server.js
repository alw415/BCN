const express = require('express');
const database = require('./database.js');
const path = require('path');
const userRoute = require('./users.js');
const sessionsRoute = require('./sessions.js').router;
const cardRoute = require('./cards');

const server = module.exports.server = express();
//const port = 6969;

server.use(express.static(path.join(__dirname, 'dist')));
