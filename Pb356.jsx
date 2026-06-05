import {useState } from "react";
function Pb356()
{
    var[text,settext]=useState("Lj university")
    var[c,setc]=useState("red");
    var[text2,settext2]=useState("React JS Hooks");
    var[btntext,setbtntext]=useState("Hide");
    return(<>
    <h1 style={{color:c}}>{text}</h1>
    <h2>{text2}</h2>
    <button onClick={f1}>change text</button>
    <button onDoubleClick={f2}>Change Color</button>
    <button onClick={f3}>{btntext}</button>
    </>)
    function f1()
    {
        if(text=="Lj university")
        {
            settext("welcome students")
        }
        else
            settext("LJ university");
    }
    function f2()
    {
        if(c=="red")
        {
            setc("blue")
        }
    }
    function f3()
    {
        if(btntext=="Hide")
        {
            setbtntext("show")
        
            settext2("")
    }
    else{
     setbtntext("Hide")
     settext2("react js hooks")
    }
}

}
export default Pb356;