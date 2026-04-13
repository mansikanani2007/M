const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send(`<html>
                <body>
                   <form method="post" action="/search">
                   <input name="t1" type="text"></input>
                   <input type="submit" value="search"></input>
                   </form></body></html>`);
});
app.post("/search", (req,res) => {
    res.send(`you have searched for ${req.body.t1}`)
})
app.listen(5000,()=>console.log("started"));