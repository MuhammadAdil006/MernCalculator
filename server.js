const express =require("express");
const app = express();
// body parser helps to access id values of form in json format
const bodyparser = require("body-parser");
const parse = require("nodemon/lib/cli/parse");

app.use(bodyparser.urlencoded({extended:true}));
app.listen(3000,function(){
console.log("server is running on port 3000");
});

app.get("/",function(req,res){
res.sendFile("index.html",{root:__dirname});
});
app.get("/bmicalculator",function(req,res){
res.sendFile("bmicalculator.html",{root:__dirname});
});
app.post("/bmicalculator",function(req,res){
     console.log(req.body);
     var weight = parseInt(req.body.weight);
     var height = parseInt(req.body.height);
     var bmi = weight/(height*height);
     res.send("your bmi is "+bmi);
});
app.post("/",function(req,res){
    console.log(req.body);
    var a;
    if(req.body.operator=='1'){
         a = Number(req.body.num1)+Number(req.body.num2);
    }else if(req.body.operator=='2')
    {
       a = Number(req.body.num1)-Number(req.body.num2);
    }
    else if(req.body.operator=='3')
    {
         a = Number(req.body.num1)*Number(req.body.num2);
    }
    else
    {
         a = Number(req.body.num1)/Number(req.body.num2);
    }
        res.send("ans is " + a);
});