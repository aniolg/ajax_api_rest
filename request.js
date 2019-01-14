

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

function errorMessage(xhr, status, strErr){
    console.log("There was an error!");
}


