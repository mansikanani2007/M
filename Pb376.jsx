//hookstate imp for exam
import { useState } from "react";
function Pb376()
{
    var[data,setdata] = useState({});
    return(
        <>
        <form onSubmit={(e)=>{fun}}>
            Student Name<input type="text" onChange={f} name="studentname"/>
            Gender:<input type="radio" name="g" onChange={f} value="boy"/>Boy
            <input type="radio" name="g" onChange={f} value="girl"/>Girl<br/>
            subject:<select name="sub" onChange={f}>
            <option value="engish">English</option>
            <option value="gujrati">Gujrati</option></select><br></br>
            Comment:<textarea name="com" onChange={f} ></textarea><br></br>
            <input type="submit"/>
            </form></>
    )
    function f(e){
        ({...data,[e.target.name]:e.target.value})
    }
    function fun(e)
    {
        e.preventDefault();
        {alert(JSON.stringify(data))}
        //alert("studentname:"+data.studentname+"\n""Gender:")
    }
}
export default Pb376