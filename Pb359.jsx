import { use, useState } from "react";
function Pb359()
{
    var[task,settask]=useState("");
    var[tasklist,setlist]=useState([]);
    return(<>
    <h1>To Do list</h1>
    Task:<input type="text" name="task" onChange={f}/><br/>
    <button onClick={addt}>+</button>
    {tasklist.map((t1)=><>
    <h2>{t1.tname}
        <button onClick={()=>del(t1.id)}>-</button></h2></>)}
    </>)
   function f(e)
   {
    settask(e.target.value);
    }
   function addt(e)
   {
    setlist([...tasklist,{id:Date.now(),tname:task}])
    settask(" ")
   }
   function del(i)
   {
     setlist(tasklist.filter((t1)=>t1.id!=i))
   }
}
export default Pb359;       