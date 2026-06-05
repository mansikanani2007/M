/*create a form two take two no form user and create three button add ,sub,mul each button call componate which uses context of two numbers and display respective results */
import { createContext, useState } from 'react';
import Add from "./Add.jsx";
import Sub from "./Sub.jsx";

const N1=createContext()
const N2=createContext()



function Cald()
{
     var[n1,setn1] = useState(0)
    var[n2,setn2]=useState(0)
    var[op,setop] = useState("")
   return(
    <>
       No1<input type="text" onChange={(e)=>{setn1(e.target.value)}}/><br></br>
     No2<input type="text" onChange={(e)=>{setn2(e.target.value)}}/><br></br>
     <button onClick={()=>setop("Add")}>Add</button>
        <button onClick={()=>setop("Sub")}>Sub</button>
    <N1.Provider value={n1} >
        <N2.Provider value={n2}>
        {op=="add" && <Add/>}
        {op=="sub" && <Sub/>}

        </N2.Provider>
    </N1.Provider>


    </>
   )
}
export default Cald
export {N1,N2}