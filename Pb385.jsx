import { useState,useEffect, use } from "react";
function Pb385()
{
    var[c,setc] = useState(0);
    var[inc,setinc] = useState(false);
    useEffect(() => {
            if(inc)
            {
                var interval=setInterval(()=>setc(++c),1000)
            }
            
               return()=> clearInterval(interval)
            
        }
    ,[inc])
    return(<>
   <h1>{c}</h1>
   <button onClick={()=>setinc(true)}>start</button>
   <button onClick={()=>setinc(false)}>stop</button>
    </>)
}
export default Pb385;