var glob = require("glob"),
    path = require("path");

app = function(tag) {
  var object = NULL
  if (tag[0] == "#") {
    object = document.getElementById(tag.drop(1))
    methods.type = "id"
    return methods.all(object)
  } else if (tag[0] == ".") {
    object = document.getElementsByClassName()
    methods.type = "class"
    return methods.all(object)
  } else  {
    object = document.getElementsByTag(tag)
    methods.type = "tag"
    return methods.all(object)
  }
}
/*
const $ = require("dinky")
$("p")
*/

app.prototype = {}
glob.sync("./plugins/*.js").forEach(function(plugin) {
  app.prototype[path.basename(plugin).replace(/\.[^/.]+$/, "")] = require(path.resolve(plugin))
}

var methods = function() {}
methods.prototype = {
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
                                        // Custom Methods
    l.text = function(text) {
      if (type == "class" || type == "tag") {
        Object.keys(object).forEach(function(elem) {
          elem.innerHTML = text
        }
      } else if (type == "id") {
          object.innerHTML = text
      }
    }
    return l
  }
}

// tests if global scope is binded to "global"
module.exports = app
