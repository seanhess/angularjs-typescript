///<reference path='d.ts/express/express.d.ts' />
///<reference path='d.ts/node/node.d.ts' />

var PORT = process.env.PORT || 3000
import express = require('express')
import http = require('http')
var connect = require('connect')
var path = require('path')

var browserify = require('browserify-middleware')

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


/// APP ///////////////////////////////////////////

app.get('/main.js', browserify('../public/app/app.js', {
    minify: false,
}))

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
