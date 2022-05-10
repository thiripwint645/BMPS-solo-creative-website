// $("h2").hide(500).show(500);

// $(document).ready(function() {
//     $("h1").click(function() {
//         $("#main").css({
//             color: "#f5f",
//         });
//     });
// });

// Loading
$(window).on("load", function() {
    $("#preloader").fadeOut(1000);
    $("#status").delay(1100).fadeOut(1000);
});
// Carousel
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },

            1000: {
                items: 2,
            },
        },
    });
});
// Progress Bar
$(document).ready(function() {
    $("#progress-elements").waypoint(
        function() {
            $(".progress-bar").each(function() {
                $(this).animate({
                        width: $(this).attr("aria-valuenow") + "%",
                    },
                    3000
                );
            });
            this.destroy();
        }, {
            offset: "bottom-in-view",
        }
    );
});