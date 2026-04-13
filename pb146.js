//write an express.js script to use of routing method using home , about , contact , temp page and print message. /home- welcome to my home page , /about -welcome to my about page, /contact-welcome to my contact page ,/temp - welcome to my temp page
const express = require("express");
const app = express();
app.get("/home",(req,res)=>{
  res.send("welcome to home page")
})
    app.get("/about",(req,res)=>{
        res.send("welcome to about page")
    })
    app.get("/contact",(req,res)=>{
        res.send("welcome to contact page")
    })
    app.get("/temp",(req,res)=>{
        res.send("welcome to temp page")
    })
    app.all(/\w*/,(req,res)=>{
        res.status(404).send("<h1 style='color:red>page not found</h1>")
    })
    app.listen(3001,"localhost",200,()=>{console.log("server started");});