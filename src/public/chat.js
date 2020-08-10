const socket = io();

$('#name').modal('show');

//Getting the name
const $nickForm = $('#nameForm');
const $nickError = $('#nickError');
const $nickname = $('#nickname');

const $users = $('#users');

const $chatForm = $('#chatForm');
const $inputText = $('#inputText');
const $chat = $('#chat')

const $close = $('#close-chat');

$close.click( () => {
    console.log('cerrando');
    const element = document.querySelector('#Chat_box-Out');
    if(element.classList.contains('Chat_box-Out')){
        element.classList.add('collapse');
        element.classList.replace('Chat_box-Out','collapsed');
        const $elClose = $('#x');
        $elClose.html(`<i class="fas fa-angle-down"></i>`);
    }else if(element.classList.contains('collapsed')){
        element.classList.remove('collapse');
        element.classList.replace('collapsed','Chat_box-Out');
        const $elClose = $('#x');
        $elClose.html(`&times;`);
    }
    
})


$nickForm.submit(e => {
e.preventDefault();

    socket.emit('new user', $nickname.val(), (data) => {
        if(!data){
            $('#name').modal('hide');
            $('#chatbox').show();
        }else{
            $nickError.html(` 
            <div class="alert alert-danger mb-0">Ese usuario ya esta en uso.</div>
            `)
            $nickname.val('');
        }
    });
});

$chatForm.submit(e => {
e.preventDefault();

const message = $inputText.val() + '';
console.log(message + '');

var CoS = 'client'; 
TextToScreen(message, CoS);
$inputText.val('');

    socket.emit('new msg' , message, ()=>{

    })
});

socket.on('message', (data) => {
    var CoS = 'Server';
    if(data.nick != $nickname.val()){
        const message = data.msg;
        const nick = data.nick;
        TextToScreen(message, CoS, nick);
    }


});


socket.on('users', data => {
    let html = ""; 
    html += data ; 
    $users.html(`<i class="fas fa-users"></i> ` + html);
})

const TextToScreen = (msg, CoS, nick) => {
    if(CoS == 'client'){
        $chat.append('<div class="flex-div-col-client"><div class="div_box"><div class="chat-box-client"><span>'+ msg +'</span></div></div></div></div></div></div>');
        ScrollDown();

    }else if(CoS == 'Server'){
        $chat.append('<div class="flex-div-col-server"><div class="div_box"><div class="chat-box-server"><span><p class="mb-1 small"style="font-weight: bold;">'+nick+':</p> ' + msg +'</span></div></div></div></div></div></div>');
        ScrollDown();
    }
    
}

const ScrollDown = () => {
    var objDiv = document.getElementById("chat");
    objDiv.scrollTop = objDiv.scrollHeight - objDiv.clientHeight;
}