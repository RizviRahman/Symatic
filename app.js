const express = require("express");
// const session = require("express-session");
const path = require("path");
const dotenv = require("dotenv");


const app = express();

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.render("index");
});

app.listen(3000, (req, res)=>{
    console.log("Application is running at port 3000 \nhttp://localhost:3000");
    console.log(req)
});