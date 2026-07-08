//1.require mongoose
const mg=require("mongoose")
//2.establish connection
mg.connect("mongodb://localhost:27017/mydb").then(() => console.log("connection successful")).catch((e) => console.log("cannot connect",e))
//3. create schema
const sc=mg.Schema({sname:String,age:Number,pass:Boolean,doj:Date,division:Object,marks:Array})
//4 create model
const student=new mg.model("student",sc)
async function created() {try{
    var s1=new student({sname:"oliver",age:18,pass:true,doj:new Date("2025-05-26"),division:{dept:"sy1",class:"A4"},marks:[18,22,16]})
var r=await s1.save()
console.log("Inserted successfull",r)
}
catch (e)
{
    console.log("cannot insert data",e)
}
}
//created()
var sm=[{sname:"henny",age:22,pass:false,doj:new Date(),division:{dept:"sy1",class:"A3"},marks:[23,24,18]},
{sname:"jency",age:16,pass:true,doj:new Date(),division:{dept:"sy2",class:"B4"},marks:[18,21,20]},
{sname:"nancy",age:22,pass:false,doj:new Date(),division:{dept:"sy2",class:"D4"},marks:[18,28,20]},
{sname:"gency",age:25,pass:true,doj:new Date(),division:{dept:"sy2",class:"c4"},marks:[18,29,20]}]
const createm=async()=>{
    try
    {
        var r1=await student.insertMany(sm)
        console.log("insert many success",r1);
    }
    catch (e)
{
    console.log("cannot insert data",e)
}
}
//createm()
const opreations=async()=>{
    try{
        var result=[];
        //result . push(await student.findOne({sname:"oliver"}))
       // result . push(await student.find({age:{$gt:18}}))
        //result . push(await student.updateOne({sname:"oliver"},{$set:{pass:false}}))
      // result . push(await student.updateMany({age:{$gt:18}},{$inc:{age:3}}))
       // result . push(await student.findByIdAndUpdate("a952416670d13c72aff65cc6",{$set:{sname:"hennyup"}}))
        result . push(await student.countDocuments())
        result . push(await student.countDocuments({doj:new Date()}))
        result . push(await student.deleteOne({sname:"hennyup"}))
        result . push(await student.deleteMany({age:{$gt:18}}))
        result . push(await student.findByIdAndDelete("a9521a39d59f01e21a432ed4"))

        console.log("Result s :\n",result)
    }
    catch(e){
        console.log("opreation unseccessful",e)
    }
}
opreations()

