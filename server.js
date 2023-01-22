const express = require('express')
const app = express()
const {sky} = require("./skywalker.js")
const players = [];


app.use(express.json())

app.get('/', function (req, res) {
  sky("a").then(r=>res.send(r));
})

app.post("/players", function(req, res)
{
    players.push(req.body);
    res.send(players);
})

app.listen(3000)