// Handle the data and post it to the server side.

document.forms[0].onsubmit = ()=>{

    let conversation = document.getElementById('conversation');
    let message = document.getElementById('message');
    console.log(message.value);
    conversation.innerHTML += `<p> ${message.value}</p>`;
    WSC.send(message.value);
    message.value = '';

}