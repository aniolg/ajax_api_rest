

$("document").ready(function() {
    $("#get_joke_btn").click(getData);
});

function getData(){
    alert("works!");
    $.ajax({
        url: "testdata.txt",
        type: "GET",
        dataType: "text",
        success: addData,
        error: errorMessage,
        complete: function(xhr, status) {
            console.log("The request is complete!")
        }
    })
}

function addData(result) {
    console.log("Setting result");
    $("#ajax_content").append(result);
}

function errorMessage(xhr, status, strErr){
    console.log("There was an error!");
}


