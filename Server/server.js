const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const clientPath = `${__dirname}/../Client`;
console.log(`Serving static from ${clientPath}`);

app.use(express.static(clientPath));
const server = http.createServer(app);

const io = socketio(server);

io.on('connection', (sock) =>{

    console.log('Someone connected');
    sock.emit('message', 'Hi, You are connected', 0);

    sock.on('message', (text) => {
        if(text != '' && text != ' ' && text != '  ' && text != '   ' && text != '    '){
        io.emit('message', text);
        }
    });

});

server.on('error', (err) => {
    console.log('Server error:', err);
});

server.listen(8080, () => {
    console.log('RPS started on 8080');
});