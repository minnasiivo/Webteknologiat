

$("#changeGrid").click(toGrid);
$("#changeList").click(toList);

function toGrid() {
    $("#myContainer").removeClass('list-container').addClass('wrapper');

    $("#changeGrid").removeClass('btn').addClass('btnSelect');
    $("#changeList").removeClass('btnSelect').addClass('btn');
}

function toList() {
    $("#myContainer").removeClass('wrapper').addClass('list-container');

    $("#changeGrid").removeClass('btnSelect').addClass('btn');
    $("#changeList").removeClass('btn').addClass('btnSelect');
}