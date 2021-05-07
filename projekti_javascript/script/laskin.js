
var textValue1 = $("#textInput1").val();
var value1 = parseInt(textValue1);
var textValue2 = $("#textInput2").val();
var value2 = parseInt(textValue2);
let result;
let count = 0;
let choiceText = $("#operationSelect option:selected").text();
let choiseVal = $("#operationSelect").val();



$(function () {
    init();
});
// Asetetaan satunnaisluvut sivun latauksen yhteydessä
function init() {
    $("#textInput1").val(randomInt(1, 10));
    textValue1 = $("#textInput1").val();
    value1 = parseInt(textValue1);
    $("#textInput2").val(randomInt(1, 10));
    textValue2 = $("#textInput2").val();
    value2 = parseInt(textValue2);
    $("#result").val(0);
    $("#counter").html("Laskuja suoritettu " + count + " kpl");


    $("#dialog").dialog({
        autoOpen: false
    })


    alert("TERVETULOA LASKEMAAN");

};


// Painikkeet:

$("#addBtn1").click(add1);
$("#subsBtn1").click(substrack1);
$("#addBtn2").click(add2);
$("#subsBtn2").click(substrack2);
$("#resultBtn").click(calculate);




function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}



function calculate() {

    let choiceText = $("#operationSelect option:selected").text();
    let choiseVal = $("#operationSelect").val();

    console.log(choiceText);
    console.log(choiseVal);
    console.log(value1 + value2);

    switch (choiseVal) {
        case "1":
            result = value1 + value2;
            break;
        case "2":
            result = value1 - value2;
            break;
        case "3":
            result = value1 * value2;
            break;
        case "4":
            result = value1 / value2;
            break;
        default:
            result = "ERROR"
    }


    $("#result").html("Tulos: " + result);

    count++;
    $("#counter").html("Laskuja suoritettu " + count + " kpl");
};



function add1() {
    textValue1 = $("#textInput1").val();
    value1 = parseInt(textValue1);
    value1++;

    if (value1 > 10 || value1 < 1) {
        $("#dialog").dialog("open");
    }

    $("#textInput1").val(value1);
    console.log(value1);
}

function substrack1() {
    textValue1 = $("#textInput1").val();
    value1 = parseInt(textValue1);
    value1--;

    if (value1 > 10 || value1 < 1) {
        $("#dialog").dialog("open");
    }
    $("#textInput1").val(value1);

}
function add2() {

    textValue2 = $("#textInput2").val();
    value2 = parseInt(textValue2);
    value2++;

    if (value2 > 10 || value2 < 1) {
        $("#dialog").dialog("open");
    }

    $("#textInput2").val(value2);
}

function substrack2() {
    textValue2 = $("#textInput2").val();
    value2 = parseInt(textValue2);
    value2--;

    if (value2 > 10 || value2 < 1) {
        $("#dialog").dialog("open");
    }

    $("#textInput2").val(value2);
}




/*

var textValue1 = $("#textInput1").val();
var value1 = parseInt(textValue1);
var textValue2 = $("#textInput2").val();
var value2 = parseInt(textValue2);
let result;
let count = 0;
let choiceText = $("#operationSelect option:selected").text();
let choiseVal = $("#operationSelect").val();



$(function () {
    init();
});
// Asetetaan satunnaisluvut sivun latauksen yhteydessä
function init() {
    $("#textInput1").val(randomInt(1, 10));
    textValue1 = $("#textInput1").val();
    value1 = parseInt(textValue1);
    $("#textInput2").val(randomInt(1, 10));
    textValue2 = $("#textInput2").val();
    value2 = parseInt(textValue2);
    $("#result").val(0);
    $("#counter").html("Laskuja suoritettu " + count + " kpl");


    $("#dialog").dialog({
        autoOpen: false
    })


    alert("TERVETULOA LASKEMAAN");

};

let laske = new Laskin($("#textInput1".val()), $("#textInput2".val()), $("#operationSelect".val()));

// Painikkeet:

$("#addBtn1").click(laske.add1);
$("#subsBtn1").click(laske.sub1);
$("#addBtn2").click(lakse.add2);
$("#subsBtn2").click(laske.sub2);
$("#resultBtn").click(laske.counter);




function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}





// LUOKKA LASKIN ----- EI VALMIS ;D

class Laskin {
    constructor(tex1, text2, select) {
        this.text1 = text1;
        this.text2 = text2;
        this.select = select;
    }

    add1() {
        // textvalue1 = this.tex1.val();
        value1 = parseInt(this.text1);
        value1++;

        if (value1 > 10 || value1 < 1) {
            $("#dialog").dialog("open");
        }

        $("#text1").val(value1);
        console.log(value1);
    };

    sub1() {
        textValue1 = $("#text1").val();
        value1 = parseInt(textValue1);
        value1--;

        if (value1 > 10 || value1 < 1) {
            $("#dialog").dialog("open");
        }
        $("#text1").val(value1);

    };


    add2() {

        text2 = $("#text2").val();
        value2 = parseInt(textValue2);
        value2++;

        if (value2 > 10 || value2 < 1) {
            $("#dialog").dialog("open");
        }

        $("#text2").val(value2);
    }

    sub2() {
        text2 = this.text2.val();
        value2 = parseInt(text2);
        value2--;

        if (value2 < 1) {
            $("#dialog").dialog("open");
        }


        this.text2.val(value2);
    }


    counter() {
        let choiceText = $("#operationSelect option:selected").text();
        let choiseVal = $("#operationSelect").val();

        console.log(choiceText);
        console.log(choiseVal);
        console.log(value1 + value2);

        switch (choiseVal) {
            case "1":
                result = value1 + value2;
                break;
            case "2":
                result = value1 - value2;
                break;
            case "3":
                result = value1 * value2;
                break;
            case "4":
                result = value1 / value2;
                break;
            default:
                result = "ERROR"
        }


        $("#result").html("Tulos: " + result);

        count++;
        $("#counter").html("Laskuja suoritettu " + count + " kpl");
    }

}


*/