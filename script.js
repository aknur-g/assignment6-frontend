
$(document).ready(function() {

    console.log("jQuery is ready!");

    $("h3").css("color", "purple");
    $("#main-heading").css("font-size", "32px");

    $("#change-btn").click(function() {
        $("#greeting").text("Hello! Welcome to my portfolio!");
    });

    $("#light-btn").click(function() {
        $("body").css({
            "background-color": "#f5f5f5",
            "color": "#333"
        });

        $(".profile").css("background-color", "transparent");
        $(".slide-heading").css("background-color", "#dddddd");
        $(".slide-panel").css("background-color", "#eaeaea");
        $(".about, .gallery, .favorites, .skills").css("color", "#333");
        $(".intro").css("color", "gray");
    });

    $("#dark-btn").click(function() {
        $("body").css({
            "background-color": "#151515",
            "color": "white"
        });

        $(".profile").css("background-color", "transparent");
        $(".about, .gallery, .favorites, .skills").css("color", "white");
        $(".slide-heading").css("background-color", "#333232");
        $(".slide-panel").css("background-color", "#333232");
        $(".intro").css("color", "white");
    });

    $("#hide-btn").click(function() {
        $("#my-info").hide();
    });

    $("#show-btn").click(function() {
        $("#my-info").show();
    });

    $("#toggle-btn").click(function() {
        $("#my-info").toggle();
    });

    $("#fade-in-btn").click(function() {
        $("#image1, #image2").fadeIn();
    });

    $("#fade-out-btn").click(function() {
        $("#image1, #image2").fadeOut();
    });

    $("#fade-toggle-btn").click(function() {
        $("#image1, #image2").fadeToggle();
    });

    $(".slide-heading").click(function() {
        $(this).next(".slide-panel").slideToggle();
    });

    $("#slide-up-btn").click(function() {
        $(".slide-panel").slideUp();
    });

    $("#slide-down-btn").click(function() {
        $(".slide-panel").slideDown();
    });

    $("#slide-toggle-btn").click(function() {
        $(".slide-panel").slideToggle();
    });

    $("#add-skill-btn").click(function() {
        let skill = $("#skill-input").val().trim();

        if (skill !== "") {
            $("#skills-list").append("<li>" + skill + "</li>");
            $("#skill-input").val("");
        }
    });

    $("#prepend-skill-btn").click(function() {
        let skill = $("#skill-input").val().trim();

        if (skill !== "") {
            $("#skills-list").prepend("<li>" + skill + "</li>");
            $("#skill-input").val("");
        }
    });

    $("#remove-skill-btn").click(function() {
        $("#skills-list li:last").remove();
    });

    $("#change-link-btn").click(function() {
        $("#social-link").attr(
            "href",
            "https://aknur-g.github.io/assignment2-frontend/"
        );

        $("#social-link").text("My Personal Website");

        $("#link-message").text(
            "Website link has been successfully changed!"
        );
    });

    $("#user-name").keyup(function() {
        let name = $(this).val();
        $("#display-name").text("Name: " + name);
    });

    $("#user-email").keyup(function() {
        let email = $(this).val();
        $("#display-email").text("Email: " + email);
    });

    let skillsAnimated = false;

    $("#animate-btn").click(function() {

        if (skillsAnimated === false) {
            $("#html-bar").animate({width: "250px"}, 1000);
            $("#css-bar").animate({width: "200px"}, 1000);
            $("#js-bar").animate({width: "180px"}, 1000);

            skillsAnimated = true;

        } else {
            $("#html-bar").animate({width: "0px"}, 1000);
            $("#css-bar").animate({width: "0px"}, 1000);
            $("#js-bar").animate({width: "0px"}, 1000);

            skillsAnimated = false;
        }
    });

});
