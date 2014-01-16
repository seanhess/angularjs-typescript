/// <reference path='./types/node/node.d.ts' />
/// <reference path='./types/express/express.d.ts' />
var PORT = process.env.PORT || 4000;
var express = require('express');
var http = require('http');
var path = require('path');

exports.app = express();

exports.app.use(express.static(__dirname + '/../public'));
exports.app.use(express.bodyParser());

var server = http.createServer(exports.app);
server.listen(PORT);
console.log("RUNNING " + PORT);
