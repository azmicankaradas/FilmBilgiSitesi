var rememberMe = document.getElementById("rememberMe");
function getInfo(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for(i=0;i<adminler.length;i++){
        if (username==adminler[i].username && password==adminler[i].password){
            // window.location.href="/adminindex.html"
            window.location.replace("adminindex.html");
            return
        }
    }
    alert("Username or password is false")  
}


