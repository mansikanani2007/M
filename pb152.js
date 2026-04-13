//Write an ExpressJS to take a textarea & submit button. After clicking submit button the content of textarea should be represented on next page by writing each sentence (separated by dot) in new line.
 const express = require("express");
 const app = express();
 app.use(express.urlencoded({ extended: true }));
 app.get("/", (req, res) => {
     res.send(`<html>
                 <body>
                    <form method="post" action="/data">
                    <textarea name="a1" placeholder="write text"></textarea>
                    <input type="submit" value="search"></input>
                    </form></body></html>`);
 });
 app.post("/data", (req,res) => {
    var sen=req.body.a1.split(".");
    var output=" ";
    for(var i=0;i<sen.length;i++)
    {
        output+=sen[i]+"<br>";
    }
    res.send(output);
 })
 app.listen(5000,()=>console.log("started"));                 
