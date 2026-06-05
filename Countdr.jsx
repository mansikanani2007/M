 import {useState,useReducer} from "react";
 function Countdr()
 {
    var[no,setno] = useState(0)
    var[count,dis]=useReducer(red,0)
    return(<>
    <h1>{count}</h1>
    <button onClick={()=>dis({change:"inc"})}>INC</button>
    <button onClick={()=>dis({change:"dec"})}>DEC</button>
    <button onClick={()=>dis({change:"reset"})}>RESET</button><br></br>
    no to inc<input type="text" name="no" onChange={(e)=>setno(e.target.value)}/>
    <button onClick={()=>dis({change:"cus", value:no})}>custominc</button>



    </>)
    function red(count,action)
    {
        if(action.change=="inc")
        {
            return count+1
        }
        else if(action.change=="dec")
        {
            return count-1
        }
        else if(action.change=="reset")
        {
            return 0
        }
        else if(action.change=="cus")
        {
            return count+parseInt(action.value)
        }
    }
 }
 export default Countdr;