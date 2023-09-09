$(document).ready(function(){
    var tem = localStorage.getItem("tema");
    if(tem == "css/style-light.css"){
        document.getElementById("tabL").classList.add("temsec");
        document.getElementById("tabD").classList.remove("temsec");
        $('link.style-cl').attr('href', tem);
    }
    else{
        document.getElementById("tabL").classList.remove("temsec");
        document.getElementById("tabD").classList.add("temsec");
        $('link.style-cl').attr('href', tem);
    }
});

$(function() {

    $('.style-options').addClass('active');
    $('.header-main').addClass('on');
	
    setTimeout(function(){
        $('.style-options').removeClass('active');
	$('.header-main').removeClass('on');
    }, 3500);

    $('.style-options .toggle-btn').on('click', function() {
        $('.style-options').toggleClass('active');
    });

    $('.style-back li a').on('click', function(e) {
    var style_link = $(this).attr('href');
       localStorage.setItem("tema", style_link);
       if(style_link == "css/style-dark.css"){
        document.getElementById("tabL").classList.remove("temsec");
        document.getElementById("tabD").classList.add("temsec");
        }
        else{
            document.getElementById("tabL").classList.add("temsec");
            document.getElementById("tabD").classList.remove("temsec");
        }
        $('link.style-cl').attr('href', style_link);

        e.preventDefault();
    });

	$('.style-nav li a').on('click', function(e) {
        var style_link = $(this).attr('href');
        $('link.pos-nav').attr('href', style_link);

        e.preventDefault();
    });

	$('.box-body li a').on('click', function(e) {
        var style_link = $(this).attr('href');
        $('link.box-bd').attr('href', style_link);

        e.preventDefault();
    });

	$('.box-style li a').on('click', function(e) {
        var style_link = $(this).attr('href');
        $('link.box-st').attr('href', style_link);

        e.preventDefault();
    });

	$('.box-title li a').on('click', function(e) {
        var style_link = $(this).attr('href');
        $('link.box-tl').attr('href', style_link);

        e.preventDefault();
    });

	$('.box-title-st li a').on('click', function(e) {
        var style_link = $(this).attr('href');
        $('link.box-tl-st').attr('href', style_link);

        e.preventDefault();
    });

	$('.style-color li a').on('click', function(e) {
        var style_link = $(this).attr('href');
        $('link.style-cl').attr('href', style_link);

        e.preventDefault();
    });

});
