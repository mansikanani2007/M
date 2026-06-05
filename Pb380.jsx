import { useState,useEffect, use } from "react";
function Pb380()
{
    var[n1,setn1] = useState("");
    var[n2,setn2] = useState("");
    var[add,setadd]=useState(0);
    var[sub,setsub]=useState(0);

    useEffect(() =>alert("addition"), [add]);
    return(
        <>
        num1<input type="number" onChange={(e)=>setn1(e.target.value)} name="num1"/>
        num2<input type="number" onChange={(e)=>setn2(e.target.value)} name="num2"/>
        <button onClick={()=>setadd(parseInt(n1)+parseInt(n2))}>+</button>
        <button onClick={()=>setsub(n1-n2)}>sub</button>
        <h1>Addition{add}</h1>
        <h1>subtraction{sub}</h1>
        </>
    )
}
export default Pb380;