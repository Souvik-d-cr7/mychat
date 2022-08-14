const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const router = require('./router');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connect', (socket) => {
    console.log('we have a new connection!!!');

    socket.on('join', ({name,room}, callback) => {
        console.log(name,room);
        callback();
    });

    socket.on('disconnect', () =>{
        console.log('we left connection!!!')
    })

});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));