// MENU MOBILE ===============================================================================
// Collpsable menu mobile and tablets

$("#megamenu-button-mobile").click(function () {
    $(".megamenu").slideToggle(400);
    $(this).toggleClass("active");
});

// MENU DROP DOWN ====================================== //
var currentMenuItem;
$(document).ready(function () {
    $(".megamenu .drop-down").click(function (event) {
        currentMenuItem = this;
        if ($(this).next("div").is(":visible")) {
            $(this).next("div").slideToggle("normal");
            event.stopPropagation();
        } else {
            $(".megamenu .drop-down-container").fadeOut("fast");
            $(this).next("div").slideToggle("slow");

            event.stopPropagation();
        }
    });
});

$('body').click(function (event) {
    var menuDiv = $('.drop-down-container')

    if (event.target.attributes["ui-sref"] ||(!menuDiv.is(event.target) // if the target of the click isn't the container...
        && menuDiv.has(event.target).length === 0)) // ... nor a descendant of the container
    {
        if ($(currentMenuItem).next("div").is(":visible")) {
            $(currentMenuItem).next("div").slideToggle("normal");
            event.stopPropagation();
        }
    }
});


// DROP DOWN MENU TABS ====================================== //
$('body').on('click', 'ul.tabs > li > a', function (e) {

    //Get Location of tab's content
    var contentLocation = $(this).attr('href');

    //Let go if not a hashed one
    if (contentLocation.charAt(0) == "#") {

        e.preventDefault();

        //Make Tab Active
        $(this).parent().siblings().children('a').removeClass('active');
        $(this).addClass('active');

        //Show Tab Content & add active class
        $(contentLocation).show().addClass('active').siblings().hide().removeClass('active');

    }
});