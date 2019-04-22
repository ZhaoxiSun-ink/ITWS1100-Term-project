$(document).ready(function() {
    $("#signup").click(function ()  {
        var email = $("#email").val();
        var username = $("#username").val();
        var password = $("#psw").val();
        var psw2 = $("#psw-repeat").val();
        if(psw2 !=  password){
            alert("Please check the password.");
            return;
        } 
        $.ajax({
            type: 'post',
            url: 'http://localhost:3000/user',
            data: {
              "id": email,
              "name": username,
              "password": psw2
            },
            success:()=>{
                alert("successful");
                window.location.href="home.html";
            },
            error:()=>{
                alert("fail");
            }
        })
    });
});