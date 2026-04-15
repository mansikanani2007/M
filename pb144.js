//write an express.js script to load an HTML file having username and password and submit button. On clicking submit button. It should jump on "check" page using "POST" method. If username is "admin" , then jump on next middleware to print "welcome… admin" , if username is not "admin" , then stay on same middleware to print "warning msg" in red color.
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send(`<html>
                <body>
                   <form method="post" action="/check">
                   <input name="un" type="text">name</input>
                   <input name="pw" type="password">password</input>
                   <input type="submit" value="search"></input>
                   </form></body></html>`);
});
function f1(req, res, next) {
        if (req.body.un === "admin") {
            next();
        }
        else {
            res.send("<h1 style='color:red'>warning:Invalid user</h1>");
        }
}
function f2(req, res, next) {
    res.send("<h1>welcome...Admin</h1>")
}
app.post("/check",f1,f2,(req, res) => {})

app.listen(5000,()=>console.log("started"));