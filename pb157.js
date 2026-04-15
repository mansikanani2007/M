//Write an ExpressJS to take a UserName, Password, Textarea for “message” & submit button using get method.1) After clicking submit button the content ofsubmitted details should be represented on “/login” page along with one“show vowel” link.2) By clicking “show vowel” link count of vowel used insubmitted “message” will display on “/message” page. (Use next()to route page
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send(`<html>
                <body>
                   <form method="post" action="/check">
                   <input name="un" type="text">name</input>
                   <input name="pw" type="password">password</input>
                   <textarea name="a1" placeholder="write text"></textarea>
                   <input type="submit" value="search"></input>
                   </form></body></html>`);
});
app.get("/login", (req,res)=> {
    res.send(`username :${req.query.un}<br> password:${req.query.pw}<br> <a href="/message">show vowels</a>`);
})
app.get("/login", (req,res,next)=> {
    var data=req.query.a1;
    var arr=data.split(",");
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]=="a"||arr[i]=="e"||arr[i]=="o"||arr[i]=="i")
        {
            count++;
        }
    }next();
})

app.listen(5000,()=>console.log("started"));