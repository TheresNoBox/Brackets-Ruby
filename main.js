/*
    Created by Edwin van Koppen, W3S.nl 2013
*/
/*global define, $, brackets, window */
define(function (require, exports, module) {
  "use strict";
  var LanguageManager = brackets.getModule("language/LanguageManager"),
      language = LanguageManager.getLanguage("html");
  
  language.addFileExtension("erb");
  
  LanguageManager.defineLanguage("haml", {
    name: "Haml",
    mode: "haml",
    fileExtensions: ["haml"],
    blockComment: ["-#", "  "],
    lineComment: ["-#"]
});  
});
