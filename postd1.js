// make a calculater who has drop down for action and two input fields for numbers. On submit it should show the result of the operation on the next page.using html file postd.html and it will print on that page ex addition of 2 and 3 is 5(method post only)
const express=require('express');
const app=express();
app.use(express.urlencoded({extended:true})); // to parse the form data sent by the client in the request body
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/postd.html");
});
app.post("/calculate",(req,res)=>{
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const operation = req.body.operation;
    let result;
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
    }
    res.send(`The result of ${operation} of ${num1} and ${num2} is ${result}`);
});
app.listen(3004,()=>{
    console.log('server is running at http://localhost:3004');
});