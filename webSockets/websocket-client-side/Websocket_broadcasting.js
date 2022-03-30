// Catching the payload or the data that is comming from the server side and handle it.

WSC.onmessage = (payload)=>{

    let h5 = document.createElement('h5');
        h5.innerHTML = payload.data;
    conversation.appendChild(h5);
    
}