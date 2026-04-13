//Write an express.js script to define one JSON array of 3 objects having members‘name’ and ‘height’. height must be sorted descending order according to name
const express = require("express");
const app = express();
var person=[{"name":"abc","height":180},
             {"name":"def","height":260},
            {"name":"xyz","height":210,}]
app.get("/",(req,res)=>{
    res.send(person);
})
app.get("/sort",(req,res)=>{
    person.sort((a,b)=>b.height-a.height)
    res.send(person);   
})
app.listen(3000);