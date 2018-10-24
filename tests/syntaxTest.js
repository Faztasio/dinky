var $ = require("dinky")

var code = "console.log(\"Hello world from Javascript Syntax Highlighting!\")"
document.getElementById("textObj").innerHTML = $.syntax(code,"javascript")
