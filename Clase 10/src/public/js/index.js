const socket=io();

const input  = document.getElementById('textbox');
const log = document.getElementById('log');
input.addEventListener('keyup',evt=>{
    if(evt.key==="Enter"){
        socket.emit('message',input.value);
        input.value=""
    }
})
socket.on('log',data=>{
    let logs='';
    data.logs.forEach(log=>{
        logs += `${log.socketid} dice: ${log.message}<br/>`
    })
    log.innerHTML=logs;
})
/*
socket.emit('message',"Hola soy cliente y me estoy comunicando desde un WS")

socket.on('evento_para_socket',data=>{
    console.log(data)
})*/
