const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

if (process.env,NODE_ENV === "production") {
    app.use(express.static(client/build));
}


app.post("/api/add_image"), function(req,res) {
    console.log(req, res);
    consoleImage.create(req.body)
        .then(function(data){
            res.json(data)
        }) .catch(function(err){
            res.status(500)
        });

)};


