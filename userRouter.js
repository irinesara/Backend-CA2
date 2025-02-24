const express = require('express');
const routes = express.routes();

const users =[
    {username:"alice",age:25,email:"alice@example.com"},
    {username:"bob",age:30,email:"bob@example.com"},
    {username:"charlie",age:28,email:"charlie@example.com"},
];

app.get('./users',(req,res)=>{
    res.status(200).json({
        messeage:"Fetched all data",
        user:user
    })
})



