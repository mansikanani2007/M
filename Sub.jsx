import { use, useContext } from "react";
import {N1,N2} from "./Cald.jsx"
function Sub()
{
    var n1=parseInt(useContext(N1));
    var n2=parseInt(useContext(N2));
    return(
        <>
        <h1>{n1} and {n2} is{n1-n2}</h1>
        </>
    )
}
export default Sub;