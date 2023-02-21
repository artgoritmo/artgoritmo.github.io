(function ($) {
	"use strict";
	
	/*----------------------------
    Responsive menu Active
    ------------------------------ */
	$(".mainmenu ul#primary-menu").slicknav({
		allowParentLinks: true,
		prependTo: '.responsive-menu',
	});
	
	/*----------------------------
    START - Menubar scroll animation
    ------------------------------ */
	jQuery(window).on('scroll', function() {
		if ($(this).scrollTop() > 10) {
			$('.header').addClass("sticky");
		} else {
			$('.header').removeClass("sticky");
		}
	});
	
	/*----------------------------
    START - Smooth scroll animation
    ------------------------------ */
	$('.mainmenu li a, .logo a,.slicknav_nav li a').on('click', function () {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
		  var $target = $(this.hash);
		  $target = $target.length && $target
		  || $('[name=' + this.hash.slice(1) +']');
		  if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html,body')
			.animate({scrollTop: targetOffset}, 2000);
		   return false;
		  }
		}
	});
	
	/*----------------------------
    START - Scroll to Top
    ------------------------------ */
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 600) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').on('click', function () {
		$('html, body').animate({scrollTop : 0},2000);
		return false;
	});
	
	/*----------------------------
    START - Slider activation
    ------------------------------ */
	$('.screenshot-wrap').slick({
		autoplay: true,
		dots: true,
		autoplaySpeed: 1000,
		slidesToShow: 3,
		centerPadding: '20%',
		centerMode: true,
		prevArrow: '',
		nextArrow: '',
		responsive: [{

		  breakpoint: 992,
		  settings: {
			slidesToShow: 1,
			centerPadding: '33.3%'
		  }

		},{

		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			centerPadding: '0'
		  }

		}]
	});
	
	var testimonialSlider = $('.testimonial-wrap');
	testimonialSlider.owlCarousel({
		loop:true,
		dots: true,
		mouseDrag: false,
		autoplay: false,
		autoplayTimeout:4000,
		nav: false,
		items: 1,
	});
	testimonialSlider.on("translate.owl.carousel", function(){
		$(".single-testimonial-box img, .author-rating").removeClass("animated zoomIn").css("opacity", "0");
	});
	testimonialSlider.on("translated.owl.carousel", function(){
		$(".single-testimonial-box img, .author-rating").addClass("animated zoomIn").css("opacity", "1");
	});
	testimonialSlider.on('changed.owl.carousel', function(property) {
		var current = property.item.index;
		var prevRating = $(property.target).find(".owl-item").eq(current).prev().find('.author-img').html();
		var nextRating = $(property.target).find(".owl-item").eq(current).next().find('.author-img').html();
		$('.thumb-prev .author-img').html(prevRating);
		$('.thumb-next .author-img').html(nextRating);
	});
	$('.thumb-next').on('click', function() {
		testimonialSlider.trigger('next.owl.carousel', [300]);
		return false;
	});
	$('.thumb-prev').on('click', function() {
		testimonialSlider.trigger('prev.owl.carousel', [300]);
		return false;
	});
	
	var heroSlider = $('.hero-area-slider');
	heroSlider.owlCarousel({
		loop:true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		nav: true,
		navText: ["<i class='icofont icofont-long-arrow-left'></i>", "<i class='icofont icofont-long-arrow-right'></i>"],
		items: 1,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		mouseDrag: true,
		touchDrag: true,
		responsive:{
			768:{
				mouseDrag: false,
				touchDrag: false,
			}
		}
	});
	
	/*----------------------------
	START - videos popup
	------------------------------ */
	$('.popup-youtube').magnificPopup({type:'iframe'});
	//iframe scripts
	$.extend(true, $.magnificPopup.defaults, {  
		iframe: {
			patterns: {
				//youtube videos
				youtube: {
					index: 'youtube.com/', 
					id: 'v=', 
					src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
				}
			}
		}
	});
	
	/*----------------------------
    START - Counterup
    ------------------------------ */
	$('.counter').counterUp({
		delay: 20,
		time: 3000
	});
	
	/*----------------------------
    START - Video
    ------------------------------ */
	if($.fn.YTPlayer){
		$(".player").YTPlayer();
	}
	
	/*----------------------------
    START - Switcher animation
    ------------------------------ */
	$('#toggle-switcher').on('click', function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('#switch-style').animate({'right':'-232px'});
		}else{
			$(this).addClass('open');
			$('#switch-style').animate({'right':'0'});
		}
	});
	
	/*----------------------------
    START - Preloader
    ------------------------------ */
	jQuery(window).on('load', function(){
		jQuery("#preloader").fadeOut(500);
	});
	
	/*----------------------------
    START - WOW JS animation
    ------------------------------ */
	new WOW().init();

}(jQuery));