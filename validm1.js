const e = require("express");
const mg=require("mongoose");
const validator=require("validator");
mg.connect("mongodb://localhost:27017/mydb").then(()=>console.log("connection success")).catch((e)=>console.log("connection failed",e));
const sc=mg.Schema({cname:{type:String,required:true},
    password:{type:String,required:true,minlength:8,maxlength:16},
    gender:{type:String,enum:["male","female","other"],trim:true},
    age:{type:Number,min:18,max:90},
    username:{type:String,match:/^[A-Za-z]+[0-9]+$/,unique:true},
    dop:{type:Date,default:new Date()},
    email:{type:String,validate:[validator.isEmail,"invalid Email id"],required:true,unique:true},
    mobile:{type:String,validate:[(v)=>{var p=/^\+91[6-9]\d{9}$/
    return p.test(v)}]}})
const customers=new mg.model("customerst",sc)
const created=async()=>{
    try{
    var c1=new customers({cname:"Mansi",
        password:"mansi2405",gender:"female",age:20,username:"Mansi24",email:"mansikanani@gmail.com",
        mobile:"8799648909"
    })
    var r=c1.save()
    console.log("insert success",r)
}
    catch(e)
{
   console.log("insert fail",e)
}

}
created()


    
