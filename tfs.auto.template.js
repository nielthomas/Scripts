// ==UserScript==
// @author https://github.com/nielthomas
// @name AutoTemplate
// @namespace http://hibbard.eu/
// @version 1.0
// @description Autofills fields in my massive form 
// @match http://fynintfs02:8080/tfs/SourceCode/*
// @copyright 2015, Niel Morgan Thomas
// @require http://code.jquery.com/jquery-latest.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @downloadURL https://github.com/nielthomas/Scripts/tfs.auto.template.js
// @updateURL https://github.com/nielthomas/Scripts/tfs.auto.template.js
// @grant    GM_addStyle
// ==/UserScript== 
var node;

waitForKeyElements (".richeditor-toolbar", actionFunction);

function actionFunction (jNode) {
    node = jNode;
    jNode.prepend('<input id="auto_template" type="button" value="Auto"/>');
    $("#auto_template").on("click", function() {
        var txt = $(".richeditor-editarea > iframe:first").contents().find("html").html(); 
        $(".richeditor-editarea > iframe:first").contents().find("html").html('<html><head><base target="_blank"><link href="EmbeddedPage.css" type="text/css" rel="stylesheet"><link href="RichEditor.css" type="text/css" rel="stylesheet"><link href="widget.css" type="text/css" rel="stylesheet">	</head>    <body contenteditable="true"><p><strong style="line-height: 1.5em;">Steps to reproduce:</strong><br></p><p><br></p><p><strong>Actual result:</strong></p><p><br></p><p><strong>Expected result:</strong></p><p><br></p></body></html>');
        node.remove('auto_template');
        waitForKeyElements (".richeditor-toolbar", actionFunction);
    });
}