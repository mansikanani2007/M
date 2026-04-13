const express=require("express");
const app= express();
app.get("/",(req,res)=>{
    //res.set("content-type","text/html");
    //res.write("<h1>Hello world</h1>");
    //res.send("hello");
    res.send("<h1 style='color:blue'>Hello world</h1>");
    res.write("hello");
});
//app.listen(PORT,SERVER,ALLOWEDREQUESTS,CALLBACK)
app.get("/about", (req,res)=>{
    var contact={"no":1111111111 ,"email":"a@b.com"}
    res.send("contact info"+JSON.stringify(contact));
})
app.listen(3000,"localhost",200,()=>{console.log("server started");});