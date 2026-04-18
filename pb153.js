const path=require("path");
const express = require("express");
const app = express();
app.use(express.static(__dirname,{"index":"pb153.html"}))
app.get("/login",(req,res)=>{
    if(req.query.rem=="yes")
        r="yes"
    
    else
        r="no"
    
    if(req.query.sub=="yes")
        s="yes"
    else
        s="no"

    res.send(`username:${req.query.un}<br>password:${req.query.pw}<br>remember me${r}<br>subscribe :${s}
    <form action="/"><input type="submit" value="logout"></input></form>`);
}) 
app.listen(3010, () => {console.log("server starte")});
