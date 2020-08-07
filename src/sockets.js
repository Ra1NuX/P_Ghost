module.exports = function (io){

let nicknames = [];
let i = 0 ; 

const UpdateUsers = () => {
    io.emit('users', i);
}

io.on('connection', socket => {

    socket.on('new user', (data, cb) => {
        if(nicknames.indexOf(data) != -1){
            cb(true);

        }else{
            cb(false);
            socket.nickname = data;
            nicknames.push(socket.nickname);
            const indexOfv = nicknames.indexOf(data);
            console.log(nicknames[indexOfv] +' Connected');
            i++;
            UpdateUsers();
        };
    });

    socket.on('send message', (data, cb) => {
        const message = data; 
        on 
    })

    socket.on('disconnect', data => {

        if(!socket.nickname) return;
    
        const indexOfv = nicknames.indexOf(socket.nickname);
    
        console.log(nicknames[indexOfv] +' Disconnected')
    
        nicknames.splice(indexOfv,1);
        i--; 
    
        UpdateUsers();
    
    })
    


});

}