const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const port = process.env.PORT || 3000;



app.set("view engine", "ejs");


// below line is for adding css to our website
app.use(express.static(__dirname + '/public'));

//for taking input from body
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.render(__dirname+"/views/home");
})
app.get("/about",function(req,res){
    res.render(__dirname+"/views/about")
})
app.get("/contact",function(req,res){
    res.render(__dirname+"/views/contact")
})
app.get("/courses",function(req,res){
    res.render(__dirname+"/views/courses")
})
app.get("/project",function(req,res){
    res.render(__dirname+"/views/project");
})

app.listen(port,function(){
    console.log("server running on port 3000");
})
