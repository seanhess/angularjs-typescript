///<reference path='def/DefinitelyTyped/node/node.d.ts' />
///<reference path='def/express.d.ts'/>
///<reference path='def/rethinkdb.d.ts'/>

var PORT = process.env.PORT || 3000
import r = module('rethinkdb')
import exp = module('express')
import http = module('http')
import types = module('types')
var connect = require('connect')
var path = require('path')
var basicAuth = require('connect-basic-auth')

import serialize = module('routing/serialize')
var result = serialize.result
var code = serialize.code
var ok = serialize.ok

import rc = module('model/RethinkConnection')

// import Book = module('model/Book')
import Clients = module('model/ClientsModel')
import Dispositions = module('model/DispositionModel')
import common = module('model/common')

var browserify = require('browserify-middleware')

var connection = new rc.Main();
function db(op) { return connection.run(op) }

export var app:exp.ServerApplication = exp()

function initTables() {
  console.log("initTables()")
  Clients.init(connection)
  .fin(() => Dispositions.init(connection))
  .fin(() => console.log(" - done"))
  // .fail(function(err) {
  //     throw err
  // })
  // connected!
  // CONFIG / set up tables, etc
  // conn.run(Book.init(db), ignoreError)
  // conn.run(File.init(db), ignoreError)
}

// app.configure("test", () => {
//   console.log("TEST")
//   connectdb('test')
// })

app.configure("development", () => {
  console.log("DEVELOPMENT")
  //app.use('/css/main.css', sass.serve(__dirname + '/../public/sass/main.scss'))
  //app.use('/css/main.css', sass.serve(__dirname + '/../public/sass/main.scss'))
  //app.use(compass({ }))
  connection.connect('detmer', initTables)
})

app.configure("production", () => {
  console.log("PRODUCTION")
  connection.connect('detmer', initTables)
})

// app.configure(() => {})

app.use(connect.static(__dirname + '/../public'))
app.use(connect.cookieParser())
app.use(connect.multipart())
app.use(connect.bodyParser())
app.use(connect.session({secret: 'funky monkey', key: 'blah', store:new connect.session.MemoryStore()}))


/// ARCHITECTURE ////////////////////
// controller: takes several params, returns a promise. Just in this file until bigger
// router: maps routes to controllers and controller output to browser
// model: data stuff. tends to return a rethinkdb expression so they can be composed

/// JAVASCRIPT ///////////////////////
// concatenates all the javascript into a single file, based on CommonJS requires
app.get('/main.js', browserify('../public/app/app.js', {
    minify: false,
}))

interface IdParams {
    id: string;
}

/// CLIENTS //////////////////////////
app.get('/api/clients', result(function() {
    return db(Clients.all())
}))

app.get('/api/clients/:id', result(function(params:IdParams) {
    return db(Clients.get(params.id))
}))

app.put('/api/clients/:id', ok(function(params:IdParams, client:types.Client) {
    return db(Clients.save(client))
}))

app.post('/api/clients', result(function(params:any, client:types.Client) {
    return db(Clients.add(client))
    .then(common.idObject)
}))

app.del('/api/clients/:id', ok(function(params:IdParams) {
    return db(Clients.remove(params.id))
}))

/// DISPOSITION ////////////////////////
app.get('/api/clients/:id/dispositions', result(function(params:IdParams) {
    return db(Dispositions.byClient(params.id))
}))

app.post('/api/clients/:id/dispositions', result(function(params:IdParams, disposition:types.Disposition) {
    return db(Dispositions.addToClient(params.id, disposition))
    .then(common.idObject)
}))



/// GENRES ////////////////////////////

// app.get('/genres', function(req, res) {
//   Book.getDistinctGenres()
//   .then(send(res), err(res))
// })

// app.get('/genres/:name/books', function(req, res) {
//   db.collect(Book.byGenre(req.params.name))
//   .then(send(res), err(res))
// })



/// AUTHORS ////////////////////////////

// app.get('/authors', function(req, res) {
//   //db.collect(Book.distinctAuthors())
//   Book.getDistinctAuthors()
//   .then(send(res), err(res))
// })

// app.get('/authors/:authorName/books', function(req, res) {
//   Book.getByAuthor(req.params.authorName)
//   .then(send(res), err(res))
// })



/// APP ///////////////////////////////////////////

app.get('/info', function(req, res) {
    res.send("Detmer v1")
})

// Send the Angular app for everything under /admin
// Be careful not to accidentally send it for 404 javascript files, or data routes
app.get(/\/[\w\/\-]*$/, function(req, res) {
  res.sendfile(path.join(__dirname, '..', 'public', 'app', 'app.html'))
})

if (module == (<any>require).main) {
  var server = http.createServer(app)
  server.listen(PORT, () => {
    console.log("RUNNING " + PORT)
  })
}
