app = function(tag) {
  var object = NULL
  if (tag[0] == "#") {
    object = document.getElementById(tag.drop(1))
    app.type = "id"
    return app.all(object)
  } else if (tag[0] == ".") {
    object = document.getElementsByClassName()
    app.type = "class"
    return app.all(object)
  } else  {
    object = document.getElementsByTag(tag)
    app.type = "tag"
    return app.all(object)
  }
}
/*
const $ = require("dinky")
$("p")
*/
app.prototype = {
  all: function(object) {
    l = {}
    if (this.type == "class" || this.type == "tag") {
      Object.keys(object[0].style).forEach(function(key) {
        l[key] = function(val) {
          object.forEach(function(obj) {
            obj.style[key] = val;
          }
        }
      })
    } else if (this.type == "id") {
      Object.keys(object.style).forEach(function(key) {
        l[key] = function(val) {
          object.style[key] = val;
        }
      }
    }
    return l
  }
}
                                         
var isNode = new Function("try {return this===global;}catch(e){return false;}");
var $ = null

// tests if global scope is binded to "global"
if(isNode()) {
  module.exports = app
} else {
  $ = app
}  
