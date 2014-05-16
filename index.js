// Testing on ArchWiki
// also; first attempt at functional js

var selector = "pre"

$.fn.once = function jq_once(cb) {
    if(this.length) {
        cb();
    }
}

$(selector).once(function() {
    var css =
        [".executeInTerminal {",
         "float: right;",
         "margin-top: -.25em;",
         "margin-left: .2em;",
         "height: 15px;",
         "width: 15px;",
         "padding: 0;",
         "border: 0;",
         "z-index: 11;",
         "position: relative;",
         "background-image: url(https://dl.dropboxusercontent.com/u/28139765/runcode.png);",
         "}"].join(''),
        s = $("<style type='text/css'>"+css+"</style>");
    $("head").append(s);
})
$(selector).each(function () {
    var t = $(this).text(),
        tt = t.charAt(0) === "$" ? t.substring(2) : t,
        ttt = tt.trim(),
        a = $("<a>").
            attr("type","application/terminal").
            attr("alt","Execute this in terminal").
            attr("href","execute-in-terminal:" + ttt).
            attr("class","executeInTerminal");
    
    $(this).prepend(a)
});