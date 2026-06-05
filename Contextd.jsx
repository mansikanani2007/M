import { createContext } from "react";
import C1 from './C1.jsx';
var fname= createContext();
var lname= createContext();

function Contextd()

{
    return(<>
    <fname.Provider value="Dhruvi"><C1/></fname.Provider>
    <lname.Provider value="Dhruvi"><C1/></lname.Provider>

    </>)
}
export default Contextd;
export {fname};
//ch 7= 5 mcq and 5 code
//ch 8 = 5 mcq 10 code 