

const writeEvent = (text, num, name) => {
    //
    const parent = document.querySelector('#events');

    //

    if(num != 0){
        console.log(aname);
            if(aname == name ){}else{
        const el = document.createElement('li');
        el.setAttribute('class', 'Client');
        el.innerHTML = text;
        parent.appendChild(el);
        var objDiv = document.getElementById("events");
        objDiv.scrollTop = objDiv.scrollHeight - objDiv.clientHeight;

        };
    }else{


        const el = document.createElement('li');
        el.setAttribute('class', 'console');
        el.innerHTML = text;
        parent.appendChild(el);
        var objDiv = document.getElementById("events");
        objDiv.scrollTop = objDiv.scrollHeight - objDiv.clientHeight;


    }

};

const onFormSubmitted = (e) =>{
e.preventDefault();

const input = document.querySelector('#chat');
const text = input.value;
input.value = '';




sock.emit('message', text);
sock.emit('name_a', aname);

if(text != '' && text != ' ' && text != '  ' && text != '   ' && text != '    '){
writeEvent(text, 1, aname)
};
};


writeEvent('Welcome to RPS', 0);


const sock = io();
sock.on('message', writeEvent);



document
    .querySelector('#chat-form')
    .addEventListener('submit', onFormSubmitted);