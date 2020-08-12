module.exports = function (io){

let users = {};
let i = 0 ; 
var n = 1;

const UpdateUsers = () => {
    io.emit('users', i);
}

io.on('connection', socket => { 

    socket.on('new user', (data, cb) => {
        if(data in users){
            cb(true);
        }else{
            cb(false);
            

            socket.nickname = data;

            if(socket.nickname == ''){socket.nickname = 'Annonimous' + n + ''; n++;};

            users[socket.nickname] = socket;
            
            console.log(socket.nickname +' Connected');
            i++;
            UpdateUsers();
        };
    });

    socket.on('new msg', (msg) => {
        const message = msg; 
        io.sockets.emit('message', {
            msg: message,
            nick: socket.nickname
        });
        
    });

    socket.on('disconnect', data => {

        if(!socket.nickname) return;
    
    
        console.log(socket.nickname +' Disconnected');
    

        delete users[socket.nickname];
        i--; 
    
        UpdateUsers();
    
    })
    


});

}