/*global define, $, brackets, window */
define(function (require, exports, module) {
    "use strict";
    var AppInit           = brackets.getModule("utils/AppInit"),
		CodeHintManager   = brackets.getModule("editor/CodeHintManager"),
        Async             = brackets.getModule("utils/Async"),
        StringUtils       = brackets.getModule("utils/StringUtils");
    
    function RubyHints() {
		this.primaryTriggerKeys = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_";
		this.secondaryTriggerKeys = ".(";
	}
    
    RubyHints.prototype.hasHints = function (editor, implicitChar) {
		this.editor = editor;
        this.currentText = "";
		var result = true;

		if (implicitChar) {
			result = (this.primaryTriggerKeys.indexOf(implicitChar) !== -1) ||
				(this.secondaryTriggerKeys.indexOf(implicitChar) !== -1);
		}
		return result;
	};
    
    RubyHints.prototype.getHints = function (implicitChar) {
        
        return 'test';
    };

});