const express = require('express');
const app = express();
const routes = ('./userRouter')

const PORT = 8080;
app.use('routes');

app.listen(PORT,async()=>{
    try{
        console.log(`Server is running in the port ${PORT}`)
    }
    catch(error){
        console.error(error);
    }
});

app.get("/",(req,res)=>{
    res.send("Hello world")
});