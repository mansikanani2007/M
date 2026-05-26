import Events from './Eventsd.jsx'
function Eventsd()
{
    return (<>
    <form onSubmit={fun}>
    username:
    <input type="text" onChange={(e)=>{console.log(e.target.value)}}/><br></br>
    <button type="button" onClick={()=>alert("you clicked once")}>click me</button>
    <button type="button" onDoubleClick={()=>alert("you clicked twice")}>Double Click me</button>
    <button type='submit'>exit page</button>
    </form>
    </>)
}
function fun(e)
{
    e.preventDefult();
    alert("Are you sure?")
}
export default Eventsd;
