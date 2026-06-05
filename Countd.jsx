import { useState } from "react";
function Countd()
{
    var [count,setcount]=useState(0);
    return(<><h1>{count}</h1>
    <button onClick={()=>{setcount(++count);}}>Increment</button>
        <button onClick={()=>{setcount(--count);}}>decrement</button>

    </>)
}
export default Countd;