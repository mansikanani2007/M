//using Express js make student information form only two fileds like name and mobile no and send data on console after submitting "submit" button
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send(`<html>
                <body>
                   <form method="post" action="/search">
                   <input name="t1" type="text">name</input>
                   <input name="t2" type="tel">mobile no</input>
                   <input type="submit" value="search"></input>
                   </form></body></html>`);
});
app.post("/search", (req,res) => {
   console.log( res.send(`you have searched for ${req.body.t1}`))
    res.send(`you have searched for ${req.body.t2}`)

})
app.listen(5000,()=>console.log("started"));