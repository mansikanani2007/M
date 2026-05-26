function Testapp()
{
    var myname="Mansi";
    return(
        <div>
            <h1>My first App</h1>
            <h2>Hello {myname}</h2>
            <p style={{color:red,}}></p>
       <h1>abc</h1>
        <p>some para</p>
        <form>Name:<input type ="text"></input><br>
        </br><input type="submit"></input></form>
        </div>
    )
}
export default Testapp;
//rules
//1.return only single elements
//2.comments
//3.All tag must be closed
//4.variables are written in {}
//5.inline style must be written in {{ }}