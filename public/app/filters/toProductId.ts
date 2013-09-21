///<reference path="../def/angular.d.ts"/>
console.log("LOADED")

app.filter("toProductId", function() {
  return function(id:string) {
    if (!id) return
    return id.replace(/-/g, "_")
  }
})
