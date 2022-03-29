// Handle the data and post it to the server side.

let conversation = document.getElementById('conversation');

WSC.onopen = ()=>{

    let title = document.getElementById('title');
    title.innerHTML = 'CHATBOX OPENED';
}

WSC.onclose = ()=>{

    let title = document.getElementById('title');
    title.innerHTML = 'CHATBOX CLOSED';
}

document.forms[0].onsubmit = ()=>{

    let message = document.getElementById('message');
    // console.log(message.value);
    // conversation.innerHTML += `<p> ${message.value}</p>`;
    WSC.send(message.value);
    message.value = '';

}