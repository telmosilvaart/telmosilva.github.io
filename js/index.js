
$(".load").addClass("loading");
$("header").hide();

$(document).ready(function() {
    $(".load").remove();
    $("video").removeClass("video-play");
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
        $(".gallery-item:eq("+index+"):not(video)").addClass("disappear").delay(4000).removeClass("appear");
    });
    var vidPos = 0;
    $("video").bind('play', function(e){
        $("video").removeClass("video-play").pause;
        $(this).addClass("video-play").prependTo(".animations");
        $("html, body").animate({
            scrollTop: $(this).offset().top
        }, 300);

    })
    $("body").click(function(){
        $("video").removeClass("video-play");
        var port_video = document.querySelector("video");
        port_video.load();
    });
});
