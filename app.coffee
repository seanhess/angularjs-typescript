PORT = process.env.PORT || 3000

express = require 'express'
coffeepot = require 'coffeepot'
stylus = require 'stylus'
nib = require 'nib'

app = express()

app.configure ->
  app.use coffeepot __dirname + '/public'
  app.use stylus.middleware
    src: 'public'
    compile: (str, path) ->
      stylus(str)
        #.include('public')
        .use(nib())
        .import('nib')
        .set('filename', path)
  app.use express.static __dirname + '/public'
  app.use express.static __dirname + '/components'

app.get '/items', (req, res) ->
  res.send [{key: "value"}]

app.listen PORT, ->
  console.log "RUNNING #{PORT}"
