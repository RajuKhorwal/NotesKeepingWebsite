const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { MongoServerError} = require("mongodb");
const multer = require("multer");

const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname,"public")));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs")

app.get("/", async (req,res)=>{
    res.render("index");
});

app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/KeyData")
.then(()=>{
    console.log("Database is connected");
})
.catch(()=>{
    console.log("Failed to connect");
})

const Key = require("./model/key");




app.post("/", async(req,res)=>{
    try{
        const data =  new Key(req.body);
        await data.save();
        res.send('<script>alert("Data saved successfully"); window.location.href = "/";</script>');
    }catch (error){
        if (error instanceof MongoServerError && error.code === 11000) {
            console.error("Duplicate key error:", error.message);
            res.status(400).send(`<script>alert("Email already exists"); window.location.href = "/";</script>`);
        } else {
            console.error("Error:", error);
            res.status(500).send("Internal Server Error");
        }
    }
});

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});