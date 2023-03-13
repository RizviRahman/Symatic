const express = require("express");

const app = express();


app.get('/',(req,res)=>{
    res.send("home");
});

app.listen(3000, (req, res)=>{
    console.log("Application is running at port 3000 \nhttp://localhost:3000");
    console.log(req)
});