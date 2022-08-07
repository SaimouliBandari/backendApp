let express = require('express');
let app = express();
var vcase = "uppercase";
require('dotenv').config()
console.log('Hello World');
    app.use("/public", express.static(__dirname + "/public"));
    app.use(function middleware(req, res, next){
        var str = req.method + " " + req.path + " - " + req.ip;
        console.log(str);
        next();
    });
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

    app.get(
        '/now', 
        (req, res, next) => {
            req.time = new Date().toString();
            next();
        },
        (req, res) => {
            res.send({
                time : req.time
            });
        }
    );
    
    app.get("/:word/echo", (req, res) => {
        const { word } = req.params;
        res.json({
          echo: word
        });
      });
        




































 module.exports = app;
