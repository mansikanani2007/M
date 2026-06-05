import axios from "axios";
import { useState,useEffect, use } from "react";
function Axiosed()
{
    var[im,setim] = useState(null);
    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/image/random").then((r)=>setim(r.data.message)).catch((e)=>console.log(e));
    },[])
     var[s,sets] = useState("");
     var[p,setp] = useState("")
    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/image/random").then((r)=>sets(r.data.message)).catch((e)=>console.log(e));
    },[])     
    return (<>
    <img src={im} alt="dogs"/>
    </>)
}
export default Axiosed;