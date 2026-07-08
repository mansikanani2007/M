const express=require("express");
const app=express()
const cors=require("cors")
const mg=require("mongoos")
app.use(cors())
app.use((express.json()))
mg.connect("mongodb://localhost:27017/mydb").then(()=>console.log("connection success")).catch((e)=>console.log("connection failed"))
const sc=mg.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true,minlength:8,maxlength:16}})
    mg.pluaralize(null)
    const person =mg.model("/sigup",async(req,res)=>{
        try{
            var un=req.body.un;
            var pw=req.body.pw;
            var p1=new person({username:un,password:pw});
            var r=await p1.save();
            console.log("insert seccesfully",r);
            res.send(un+"Data inserted from backend")
        }
        catch(e){
            console.log("insert failed",e)
            res.send("Data not saved")
        }
    })
  app.listen(5000, ()=>{console.log("listening on " )})