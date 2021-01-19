function send(event){
    event.preventDefault();
    var msg=document.getElementById("message").value;
    var date=new Date();
    if(msg===""){
        alert("Enter any message!");
    }else{
        Notification.requestPermission();
        new Notification(`your best frnd 😃 (${date.toLocaleDateString()})`,{
            icon:"img/icon48.png",
            body : `${msg.toUpperCase()} (${date.toLocaleTimeString()}) `,
            tag : "message"
        });     
        document.getElementById("message").value="";
    }
     
    }
    
