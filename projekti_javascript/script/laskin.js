/*
window.onload = function () {
    document.getElementById("textInput1").value = 0;
    document.getElementById("textInput2").value = 0;
    document.getElementById("result").value = 0;
    document.getElementById("counter").innerHTML = "Laskuja suoritettu" + counter + "kpl";
}
function showResult() {
    counter = counter + 1;
    document.getElementById("counterCol").innerHTML = "Laskuja suoritettu" + counter + "kpl";
}
*/
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

function init() {
    $("#textInput1").val(randomInt(1, 10));
    $("#textInput2").val(randomInt(1, 10));
    $("#result").val(0);
    $("#counter").html("Laskuja suoritettu " + count + " kpl");
};


$("#addBtn1").click(add1);
$("#subsBtn1").click(substrack1);
$("#addBtn2").click(add2);
$("#subsBtn2").click(substrack2);
$("#resultBtn").click(calculate);

$(function () {
    $("#dialog").dialog();
});

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



    /* result = new Laskin(value1, value2, choiceVal)
     $("#result").html("Tulos: " + result.counter);
 
     count++;
     $("#counter").html("Laskuja suoritettu " + count + " kpl");*/
};



function add1() {

    textValue1 = $("#textInput1").val();
    value1 = parseInt(textValue1);
    value1++;

    $("#textInput1").val(value1);
    console.log(value1);
}

function substrack1() {
    textValue1 = $("#textInput1").val();
    value1 = parseInt(textValue1);
    value1--;
    $("#textInput1").val(value1);
}
function add2() {

    textValue2 = $("#textInput2").val();
    value2 = parseInt(textValue2);
    value2++;
    num2 = value2;
    $("#textInput2").val(value2);
}

function substrack2() {
    textValue2 = $("#textInput2").val();
    value2 = parseInt(textValue2);
    value2--;
    num2 = value2;
    $("#textInput2").val(value2);
}

class Laskin {
    constructor(num1, num2, select) {
        this.num1 = num1;
        this.num2 = num2;
        this.select = select;
    }

    counter() {
        return num1 + this.num2;
    }
}