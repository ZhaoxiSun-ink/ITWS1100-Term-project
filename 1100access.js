$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"resource.json",
        datatype:"json",
        success:function(data,status){
            var out = "<ul>";
            console.log(data);
            var title = data.resource[0].title;
            $("#out").append("<h3>"+title+"</h3>");
            $.each(data.resource, function(i,item) {
                if(this.title == title){
                    $("#out").append(
                        "<li>    "+this.year+" ~ "+this.course+" - "+"<a href='" + this.place + "' target='_blank'>" +
                        this.id+"</a>"+"  ("+this.tag+")"+"</li>");
                }else{
                    title = this.title;
                    $("#out").append("<h3>"+this.title+"</h3>");
                    $("#out").append(
                        "<li>    "+this.year+" ~ "+this.course+" - "+"<a href='" + this.place + "' target='_blank'>" +
                        this.id+"</a>"+"  ("+this.tag+")"+"</li>");
                }     
            });
            out += "</ul>"; 
            console.log(out);           
        },error:function(){
            alert("Cannot open the json.")
        }
    });
});