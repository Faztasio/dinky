var $ = require("dinky"),
  prism = require("prismjs"),
  loadlang = require("prismjs/components/")

module.exports = function(code,lang) {
  loadlang([lang])
  return prism.highlight(code,prism.languages[lang],lang)
}
