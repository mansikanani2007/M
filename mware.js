const express = require("express");
const app = express();
function fun(req, res, next) {
    console.log("Hello world");
    next();
}
app.use(fun);
app.get("/", (req, res)=> {
    res.send("<h1>Home page</h1>");
})
app.get("/about",fun, (req, res,)=> {
    res.send("<h1>ABOUT PAGE</h1>");
})
app.listen(5000,()=>console.log("started"));