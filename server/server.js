const express = require('express');
const app = express();
const http = require('http');
const port = 3000;
const server = http.createServer(app);
const morgan = require('morgan');
const bodyParser = require('body-parser');
const five = require("johnny-five");
const board = new five.Board();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/', function (req, res, next) {
    res.status(200).json({
        server: req.body
    });
});

/*
// check boad on ready
board.on("ready", function() {
    // middleware
    app.use('/', (req, res, next) => {

        const {id, action} = req.body;
        let led = new five.Led(id);

        if (action == 'on') { led.on(); }
         else {
            led.stop();
            led.off();
        }


        res.status(200).json({
            message: 'message',
            data: req.body
        });
        
        console.log(req.body);
    });
   
});
*/

server.listen(port, () => console.log(`http://localhost:${port}`));