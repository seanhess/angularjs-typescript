/// <reference path='all.d.ts' />

var PORT = process.env.PORT || 3000
import express = require('express')
import http = require('http')
var connect = require('connect')
var path = require('path') 
import r = require('rethinkdb')
import rdb = require('./RethinkConnection')
var expressPromise = require('express-promise')

var db = rdb({
    host:'localhost',
    db: 'test',    
    port: 28015,
})
var run = db.run
var toArray = db.toArray

export var app = express()

app.use(connect.static(__dirname + '/../public'))
// app.use(connect.cookieParser())
// app.use(connect.multipart())
app.use(connect.bodyParser())
// app.use(connect.session({secret: 'funky monkey', key: 'blah', store:new connect.session.MemoryStore()}))

// You can res.send any promsie. 
// What does it do on an error?
app.use(expressPromise())

app.configure(function() {
    db.connect()
    .then(() => run(r.db('test').tableCreate('messages')))
})

app.configure("production", () => {
    console.log("PRODUCTION") 
})

app.configure("development", () => {
    console.log("DEVELOPMENT")
})

/// EXAMPLE API CALL //////////////////////////////

app.get('/messages', function(req, res) {
    res.send(run(r.table('messages')))
})

app.post('/messages', function(req, res) {
    var message:IMessage = req.body
    res.send(
        run(r.table('messages').insert(message))
        .then(() => 200)
    )
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
