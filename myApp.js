let express = require('express');
let app = express();
var vcase = "uppercase";
require('dotenv').config()
console.log('Hello World');
    app.use("/public", express.static(__dirname + "/public"));
    app.get('/', (req, res) =>{
        res.sendFile(__dirname + "/views/index.html");
        
    });

    app.get('/json' , (req, res) =>{
        let mess = "Hello json";
        if(process.env.MESSAGE_STYLE == vcase){
            mess = mess.toUpperCase();
            
        }

        res.json({message : mess});
        
    });
        




































 module.exports = app;
