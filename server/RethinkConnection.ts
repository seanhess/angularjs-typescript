///<reference path='all.d.ts'/>

// Contains some functions to help run rethinkdb queries and return promises
// basically turns an operation into a promise, and maintains the connection

// TODO: some way to help make tables?

import q = require('q')
import r = require('rethinkdb')

export = rdb

// initializes a connection eventually
function rdb(options:r.ConnectionOptions) {

    var connection = null

    function toArray(exp:r.Operation<r.Cursor>):q.IPromise<any[]> {
        var def = q.defer()
        exp.run(connection, function(err:Error, cursor:r.Cursor) {
          if (err) return def.reject(err)
          cursor.toArray(function(err:Error, items:any[]) {
            if (err) def.reject(err)
            else def.resolve(items)
          })
        })
        return def.promise
    }

    function run<T>(exp:r.Operation<T>):q.IPromise<T> {
        var def = q.defer()
        exp.run(connection, function(err:Error, stuff:any) {
            if (err) def.reject(err)
            else if (stuff && stuff.toArray) {
                stuff.toArray(function(err:Error, items:any[]) {
                    if (err) def.reject(err)
                    else def.resolve(items)
                })
            }
            else def.resolve(stuff)
        })
        return def.promise
    }

    function connect():q.IPromise<r.Connection> {
        console.log("rethinkdb://"+options.host+":"+options.port+"/" + options.db)
        var def = q.defer()
        r.connect(options, (err:Error, c) => {
            if (err) def.reject(err)
            connection = c;
            r.dbCreate(options.db).run(connection, (err:Error, result:r.CreateResult) => {
                // ignore error (It's probably an already created error)
                connection.use(options.db)
                def.resolve(connection)
            })
        })
        return def.promise
    }

    return {
        toArray: toArray,
        run: run,
        connect: connect,
    }
}


