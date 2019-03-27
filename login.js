
$(document).ready(function() {
    $("#save").click(function ()  {
        var name = $("#name").val();
        var password = $("#password").val();
        response.setHeader("Access-Control-Allow-Origin", "*"); 
        $.ajax({
            type:'GET',
            url: 'usersdata.js',
            dataType:"json",
            error:function(){alert("fail")},
            success:function(data){
                var len = data.user.length;
                for (var i = 0; i <len; i++){
                    if(name == data.user[i].name && password == data.user[i].password){
                        alert("login succcessful.");
                        return;
                    }
                }
                alert("login fail");
            }
        })
    });
});
