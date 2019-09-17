const express = require('express');
const app = express();
const http = require('http');
const port = 3000;
const server = http.createServer(app);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/', function (req, res, next) {
    res.status(200).json({
        server: req.body
    })
});

server.listen(port, () => console.log(`http://localhost:${port}`));