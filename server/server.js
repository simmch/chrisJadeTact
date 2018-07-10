require("dotenv").config();

const express = require("express");
const db = require("./firebase/firebase");
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(process.env.MESSAGE);
})

app.use("/git", (req, res) =>{
    console.log("Request being made...");
    var pStar = "Hey";
    var specialty = "Love"

    db.star.push({
        pStar: pStar,
        specialty: specialty
    }, console.log("Success, baby"))
})
