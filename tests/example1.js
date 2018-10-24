const $ = require("dinky")

$("p")                        // Gets all tags of "p"
  .font-size("15px")          // Sets all "p" tags' Font Size to "15px"
  .font-color("blue")         // Sets all "p" tags' Font Color to "Blue"

$("#random-id-of-a-tag")      // Gets tag with id of "random-id-of-a-tag"
  .font-size("16px")          // Sets all tags with id's Font Size to "16px"

$(".random-class")            // Gets all tags with class "random-class"
  .text-align("center")       // Sets all tags with class's Text Alignment to "Center"
