let pictures_json = '[{"title":"Talviset kaakaot", "src":"media/kaakao.jpg"}, {"title":"Loimulohta", "src":"media/loimu.jpg"}, {"title":"Suuri lumiotus", "src":"media/lumiukko.jpg"}, {"title":"Herkkukaakaot", "src":"media/nam.jpg"}, {"title":"Mökkinuotio", "src":"media/nuotio.jpg"}, {"title":"Pullaa", "src":"media/pulla.jpg"}, {"title":"Ruusuja", "src":"media/ruusu.jpg"}, {"title":"Syksy", "src":"media/syksy.jpg"}, {"title":"Ajelulla", "src":"media/tie.jpg"}, {"title":"Viiniä", "src":"media/viini.jpg"}]';
let pictures_array;
let index;
let intervalId;
let isStarted;
let localStorageKey = 'imageId';
var intervalTimer = window.setInterval(getNextPicture, 5000);

$(function () {
    init();
});

$("#nextBtn").click(getNextPicture);
$("#previousBtn").click(getPreviousPicture);
$("#pauseBtn").click(pausePictures);

function init() {
    pictures_array = JSON.parse(pictures_json);

    if (localStorage.hasOwnProperty(localStorageKey)) {
        index = localStorage.getItem(localStorageKey);
    } else {
        index = 0;
    }

    //intervalTimer = setInterval(getNextPicture, 2000);
    isStarted = true;
    // vian etsintää
    console.log(pictures_array[index].src);
}



function getNextPicture() {
    index++;

    if (index > 9) {
        index = 0;
    }

    $("#nameDiv").html(pictures_array[index].title);
    $('#pictures').attr("src", pictures_array[index].src);

    $("#pictures").fadeOut("slow", function () {
        $("#pictures").show();
    });
    localStorage.setItem(localStorageKey, index);
}


function getPreviousPicture() {
    index--;

    if (index < 0) {
        index = 9;
    }

    $("#nameDiv").html(pictures_array[index].title);
    $('#pictures').attr("src", pictures_array[index].src);
    $("#pictures").fadeOut("slow", function () {
        $("#pictures").show();
    });
    localStorage.setItem(localStorageKey, index);

}


function pausePictures() {
    if (isStarted) {
        window.clearInterval(intervalTimer);
        isStarted = false;
        $("#pauseBtn").html('&#9654');
    }
    else {
        intervalTimer = window.setInterval(getNextPicture, 5000);
        isStarted = true;
        $("#pauseBtn").html('&#8741');

    }
}


