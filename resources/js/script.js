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