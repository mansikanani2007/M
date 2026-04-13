const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send(`<html>
                <body>
                   <form method="get" action="/search">
                   <input name="t1" type="text"></input>
                   <input type="submit" value="search"></input>
                   </form></body></html>`);
});
app.get("/search", (req,res) => {
    res.send(`you have searched for ${req.query.t1}`)
})
app.listen(5000,()=>console.log("started"));