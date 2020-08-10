const http = require('http');
const express = require('express');
const path = require('path');



const app = express();

//Settings .
app.set('port', 5000);
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

//Statics.
app.use(express.static(path.join(__dirname, 'public')));

//Listen.
const server = app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'));
})

const socketio = require('socket.io');
const io = socketio(server);

//Routes.
app.use(require('./routes/index'));


require('./sockets')(io);