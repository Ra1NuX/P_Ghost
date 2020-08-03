

const writeEvent = (text, num) => {
    //
    const parent = document.querySelector('#events');

    //

    if(num != 0){
    const el = document.createElement('li');
    el.innerHTML = text;

    parent.appendChild(el);
    }else{
    const el = document.createElement('li');
    el.setAttribute('class', 'console');
    el.innerHTML = text;
    
    parent.appendChild(el);
    }
};

const onFormSubmitted = (e) =>{
e.preventDefault();

const input = document.querySelector('#chat');
const text = input.value;
input.value = '';

sock.emit('message', text);
};


writeEvent('Welcome to RPS', 0);


const sock = io();
sock.on('message', writeEvent);

document
    .querySelector('#chat-form')
    .addEventListener('submit', onFormSubmitted);