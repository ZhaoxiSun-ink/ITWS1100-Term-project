$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"resource.json",
        datatype:"json",
        success:function(data,status){
            var out = "<ul>";
            console.log(data);
            $.each(data.resource, function(i,item) {    
                $("#out").append(
                    "<li>"+this.year+" ~ "+this.course+" - "+"<a href='" + this.place + "' target='_blank'>" +
                    this.name+"</a>"+"  ("+this.tag+")"+"</li>");
            });
            out += "</ul>"; 
            console.log(out);           
        },error:function(){
            alert("Cannot open the json.")
        }
    });
});