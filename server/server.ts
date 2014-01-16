/// <reference path='./types/node/node.d.ts' />
/// <reference path='./types/express/express.d.ts' />

var PORT = process.env.PORT || 4000
import express = require('express')
import http = require('http')
var path = require('path') 

export var app = express()

app.use(express.static(__dirname + '/../public'))
app.use(express.bodyParser())

var server = http.createServer(app)
server.listen(PORT)
console.log("RUNNING " + PORT)
