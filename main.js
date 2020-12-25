function send(event){
    event.preventDefault();
    var msg=document.getElementById("message").value;
    var date=new Date();
    if(msg===""){
        alert("Enter any message!");
    }else
       for (let index = 0; index <= 10; index++) {
        Notification.requestPermission();
        new Notification(`your best frnd 😃 (${date.toLocaleDateString()})`,{
            icon:"img/icon48.png",
            body : `${msg.toUpperCase()} (${date.toLocaleTimeString()}) `,
            tag : "message"
        });     
       }
     
    }
    