

$("document").ready(function() {
    $("#get_joke_btn").click(getData);
});

function getData(){
    var jokeApi = "http://api.icndb.com/jokes/random";
    $.getJSON(jokeApi, {
        tags: "joke",
        tagmode: "any",
        format: "json"
    }, addData)
}

function addData(result) {
    console.log("Setting result");
    $.each(result, function (index, element){
        $("#joke").html("<p>" + element.joke + "</p>");
    } )
    
}

/*AJAX HANDLERS*/
$(document).ajaxStart(function () {
    console.log("AJAX starting");
});

$(document).ajaxStop(function () {
    console.log("AJAX request ended");
});

$(document).ajaxSend(function (evt, jqXHR, options) {
    console.log("About to Send request for data...");
});

$(document).ajaxComplete(function (evt, jqXHR, options) {
    console.log("Everything's finished!");
});

$(document).ajaxError(function (evt, jqXHR, settings, err) {
    console.log("Hmmm. Seems like there was a problem: " + err);
});

$(document).ajaxSuccess(function (evt, jqXHR, options) {
    console.log("Looks like everything worked!");
});
