import { use, useState } from "react";
function Formd()
{
    var[data,setdata]=useState({});
    return(<>
    <form onSubmit={(e)=>e.preventDefault()}>
        First Name<input type="text" onChange={f} name="firstname"/><br></br>
        Last Name<input type="text" onChange={f} name="lastname"/><br></br>{"  "}
        <input type="submit"/>
        </form>
        <h1>Welcome{"  "+data.firstname+"  "+data.lastname}</h1>
        </>)
        function f(e)
        {
            setdata({...data,[e.target.name]:e.target.value});
        }
        
} 
export default Formd;