


function init() {

}


function search() {
    var myCity = document.getElementById("city").value;
    var myAddress = document.getElementById("address").value;
    var mapsite = 'https://www.google.com/maps?q=' + myAddress + myCity + '&output=embed';
    console.log(mapsite);
    document.getElementById("map").src = mapsite;

    let data = myAddress + ", " + myCity;
}

function enterPress(event) {
    var x = event.which || event.keyCode;
    console.log(x);
    if (x == 13) {
        var myCity = document.getElementById("city").value;
        var myAddress = document.getElementById("address").value;
        var mapsite = 'https://www.google.com/maps?q=' + myAddress + myCity + '&output=embed';
        console.log(mapsite);
        document.getElementById("map").src = mapsite;
    }
}



