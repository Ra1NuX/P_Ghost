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

const message = $inputText.val()
console.log(message);

const CoS = 'client'; 
TextToScreen(message, CoS);
$inputText.val('');
});

socket.on('users', data => {
    let html = ""; 
    html += data ; 
    $users.html(`<i class="fas fa-users"></i> ` + html);
})

const TextToScreen = (msg, CoS) => {
    if(CoS == 'client'){
        $chat.append('<li class="client">'+ msg +'</li>');
    }else{

    }
    
}