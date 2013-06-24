/*global define, $, brackets, window */
define(function (require, exports, module) {
    "use strict";
  
    var LanguageManager = brackets.getModule("language/LanguageManager"),
        erb = LanguageManager.getLanguage("html"),
        ruby = LanguageManager.getLanguage("ruby");
  
    erb.addFileExtension("erb");
    ruby.setLineCommentSyntax("#");
  
    LanguageManager.defineLanguage("haml", {
        name: "Haml",
        mode: "haml",
        fileExtensions: ["haml"],
        blockComment: ["-#", "  "],
        lineComment: ["-#"]
    });
});
