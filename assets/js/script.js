$(function (){
    $('[data-bs-toggle="tooltip"]').tooltip();
});


$(document).scroll(function(){
    const y = $("html").scrollTop();

    y > 650 ? $("nav").addClass("nav-black") : $("nav").removeClass("nav-black")
})