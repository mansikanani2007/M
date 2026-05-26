function productsu(p)
{
    return(
        <div style={{border: "4px solid blue", padding: "10px",borderRadius: "15px",margin: "10px",width: "300px",backgroundColor: "#ffff33",textAlign: "center",justifyContent: "center"}}>
            <h1>{p.name}</h1>
            <img src={p.img} height="200px" width="200px"/>
            <h3>{p.price}</h3>

        </div>
    )
}
export default productsu