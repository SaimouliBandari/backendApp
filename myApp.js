let express = require('express');
let app = express();
let bodyParser = require('body-parser');
var vcase = "uppercase";
require('dotenv').config();
console.log('Hello World');
    app.use("/public", express.static(__dirname + "/public"));
    app.use(function middleware(req, res, next){
        var str = req.method + " " + req.path + " - " + req.ip;
        console.log(str);
        next();
    });
    app.use(bodyParser.urlencoded({extended : false}));
    app.use(bodyParser.json());
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

    app.get("/name", (req, res) => {
        var { first:firstName, last: lastName} = req.query;
        res.json({
            name : `${firstName} ${lastName}`
        })
    });

    app.post('/name', function(req, res){
        var str = req.body.first + " " + req.body.last;
        res.json({name : str});
    });
        




































 module.exports = app;
