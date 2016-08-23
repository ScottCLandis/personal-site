$(document).ready(function () {
    $("#open").click(function () {
        $(".menu").show("drop", 300);
    });
    $("#close").click(function () {
        $(".menu").hide("drop", 300);
    });
    $("#all-but").click(function () {
        $(".app").hide("slide", 300);
        $(".photo").hide("slide", 300);
        $(".web").hide("slide", 300);
        $(".web").delay(500).show("slide", 300);
        $(".photo").delay(500).show("slide", 300);
        $(".app").delay(500).show("slide", 300);
        $(".filter-but").removeClass("selected");
        $("#all-but").addClass("selected");


    });
    $("#apps-but").click(function () {
        $(".app").hide("slide", 300);
        $(".app").delay(400).show("slide", 300);
        $(".photo").hide("slide", 300);
        $(".web").hide("slide", 300);
        $(".filter-but").removeClass("selected");
        $("#apps-but").addClass("selected");
    });
    $("#photos-but").click(function () {
        $(".app").hide("slide", 300);
        $(".photo").hide("slide", 300);
        $(".photo").delay(400).show("slide", 300);
        $(".web").hide("slide", 300);
        $(".filter-but").removeClass("selected");
        $("#photos-but").addClass("selected")
    });
    $("#web-but").click(function () {
        $(".app").hide("slide", 300);
        $(".photo").hide("slide", 300);
        $(".web").hide("slide", 300);
        $(".web").delay(400).show("slide", 300);
        $(".filter-but").removeClass("selected");
        $("#web-but").addClass("selected")
    });
});