var express=require('express');
var app=express();



app.get("/aboutus",(req,res)=>{
    res.send(

        "<h1>Vijay Sales about us</h1>"
        +"<hr/>"

    );
});
var server=app.listen(9000);
console.log("Vijay Sales service listening on port 9000");
