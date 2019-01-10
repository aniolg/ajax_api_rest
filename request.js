

$("document").ready(function() {
    $("#get_joke_btn").click(getData);
});

function getData(){
    var jokeApi = "http://api.icndb.com/jokes/random";
    $.getJSON(jokeApi, {
        tags: "id joke",
        tagmode: "any",
        format: "json"
    }, addData)
}

function addData(result) {
    console.log("Setting result");
    $("#ajax_content").append(result);
}

function errorMessage(xhr, status, strErr){
    console.log("There was an error!");
}


