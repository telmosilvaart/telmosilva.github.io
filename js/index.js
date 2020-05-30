
$(".load").addClass("loading");
$("header").hide();

$(document).ready(function() {
    $(".load").remove();
    $("header").fadeIn();
    $("header figure").addClass("intro1");
    $("header").addClass("intro2");
    $("main").addClass("intro3");
    $("footer").addClass("intro4");
    var index = 0;
    $(".thumbnail-item").click(function(){
        index = $(this).index(".thumbnail-item");
        console.log(index);
        $("#gallery-view-container").addClass("appear").removeClass("disappear").css("display", "flex");
        $(".gallery-item:eq("+index+")").addClass("appear").removeClass("disappear");
    });

    $("#gallery-view-container").click(function(){
        $("#gallery-view-container").addClass("disappear").delay(4000).css("display", "none").removeClass("appear");
        $(".gallery-item:eq("+index+")").addClass("disappear").delay(4000).removeClass("appear");
    });
});
