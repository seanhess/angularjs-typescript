/// <reference path='./all.d.ts' />

var PORT = process.env.PORT || 3000
import express = require('express')
import http = require('http')
var connect = require('connect')
var path = require('path') 
import types = require('types')

export var app = express() 

app.use(connect.static(__dirname + '/../public'))
// app.use(connect.cookieParser())
// app.use(connect.multipart())
app.use(connect.bodyParser()) 
// app.use(connect.session({secret: 'funky monkey', key: 'blah', store:new connect.session.MemoryStore()}))

app.configure("production", () => {
  console.log("PRODUCTION")
})

app.configure("development", () => {
  console.log("DEVELOPMENT")
})

app.configure("test", () => {
  console.log("TEST")
}) 

/// EXAMPLE API CALL //////////////////////////////

app.get('/messages', function(req, res) {
    var messages:types.IMessage[] = [
        {name:"Henry", body:"This is a message"},
        {name:"Bobby", body:"Hi there Henry"},
        {name:"Wahoo", body:"Hi there Henry"},

    ]
    res.send(messages)
})

/// APP ///////////////////////////////////////////

app.get('/info', function(req, res) {
    res.send("AngularJS Bootstrap")
})

// Send the Angular app for everything under /admin
// Be careful not to accidentally send it for 404 javascript files, or data routes
app.get(/\/[\w\/\-]*$/, function(req, res) {
  res.sendfile(path.join(__dirname, '..', 'public', 'index.html'))
})

if (module == (<any>require).main) {
  var server = http.createServer(app)
  server.listen(PORT, () => {
    console.log("RUNNING " + PORT)
  })
}
