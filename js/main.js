$(document).ready(function () {
    $("#open").click(function () {
        $(".menu").show("drop", 300);
    });
    $("#close").click(function () {
        $(".menu").hide("drop", 300);
    });
});