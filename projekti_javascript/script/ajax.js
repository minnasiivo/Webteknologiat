let numbersURL = "http://numbersapi.com/random/trivia";
let mySearch = 0;
let sectionId = 0;
let CNsectionId = 0;
let CNSearch = 0;
let CNURL = "http://api.icndb.com/jokes/random/1";

$(function () {
    $("#loading").hide();
    $("#loading2").hide();
    $("#counter").html("Hakuja tehty yhteensä " + mySearch + "kpl");
    $("#counterCN").html("Hakuja tehty yhteensä " + CNSearch + "kpl");
    $("#accordion").accordion({
        collapsible: true
    });
    $("#accordionNorris").accordion({
        collapsible: true
    });

    console.log("testi");
})

// Numeroiden haku (tekstinä)

$("#numBtn").click(function () {
    $("#loading").show();

    mySearch++;
    $("#counter").html("Hakuja tehty yhteensä " + mySearch + "kpl");

    $.ajax({
        type: "GET",
        url: numbersURL,
        dataType: "text",
        success: function (response) {


            sectionId++;

            $("#loading").hide();

            $("#accordion").append("<h3> Numero Fakta " + sectionId + " </h3><div> <p>" + response + " </p></div>");
            $("#accordion").accordion("refresh");
        }
    });

});

// JSON datan haku:

$("#CNBtn").click(function () {
    // Lataus ikoni näkyviin tiedon haun ajaksi
    $("#loading2").show();
    // Lisätään laskurin arvoa yhdellä
    CNSearch++;
    $("#counterCN").html("Hakuja tehty yhteensä " + CNSearch + "kpl");
    // Tiedonhaku Chuck Norris Databasesta:
    CNsectionId++;
    $.ajax({
        type: "GET",
        url: CNURL,
        dataType: 'json',
        success: parseJokes
    });

});


function parseJokes(messages) {
    $.each(messages.value, function (i, field) {
        $("#accordionNorris").append("<h3> Chuck Noris Vitsi " + CNsectionId + " </h3><div> <p>" + field.joke + " </p></div>");
        $("#accordionNorris").accordion("refresh");
        $("#loading2").hide();
    });
}

