
function init() { }
function search() {
    var myCity = document.getElementById("city").value;
    var myAddress = document.getElementById("address").value;
    var mapsite = 'https://www.google.com/maps?q=' + myAddress + myCity + '&output=embed';
    console.log(mapsite);
    document.getElementById("map").src = mapsite;
}
