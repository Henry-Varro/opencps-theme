//Auto close Navbar when click outside

$(document).click(function (event) {
    var clickover = $(event.target);
    var _opened1 = $(".topbar .navbar-collapse").hasClass("navbar-collapse collapse in");
    if (_opened1 === true && !clickover.hasClass("navbar-toggle nav-top")) {
        $(".topbar button.navbar-toggle").click();
    }
});

$(document).click(function (event) {
    var clickover = $(event.target);
    var _opened2 = $(".navbar-default .navbar-collapse").hasClass("navbar-collapse collapse in");
    if (_opened2 === true && !clickover.hasClass("navbar-toggle nav-main") && !clickover.is('input')) {
        $(".navbar-default button.navbar-toggle").click();
    }
});



//Handle change icon dropdown when hover over li.dropdown

//if ($(window).width() > 992) {
//	$("#banner .dropdown").hover(            
//	    function() {
//	        $('#banner .dropdown-menu', this).stop( true, true ).fadeIn("fast");
//	        $(this).toggleClass('open');
//	        $('i', this).toggleClass("fa-angle-down fa-angle-up");                
//	    },
//	    function() {
//	        $('#banner .dropdown-menu', this).stop( true, true ).fadeOut("fast");
//	        $(this).toggleClass('open');
//	        $('i', this).toggleClass("fa-angle-down fa-angle-up");                
//	});
//}

$('#banner .dropdown > i').click(function () {
    $(this).toggleClass('fa-angle-down fa-angle-up');
    $("#banner .dropdown > i").not(this).removeClass('fa-angle-up');
    $("#banner .dropdown > i").not(this).addClass('fa-angle-down');
});



//Slide Row 1

$("#row-one").owlCarousel({
	autoPlay: true,
	stopOnHover: true,
    singleItem: true,
    pagination: false
});



//Slide Row 2 Homepage - Table and up

function initCarouselIndicators() {
    $(".carousel-indicators[data-target]").each(function (i, indicators) {
        var targetId = indicators.dataset.target;
        if (targetId != "") {
            var $carousel = $(targetId);
            $carousel.bind('slide.bs.carousel', function (e) {
                var $targetSlide = $(e.relatedTarget);
                var index = $targetSlide.index();
                $('.carousel-indicators[data-target="' + targetId + '"] li').removeClass('active')
                $('.carousel-indicators[data-target="' + targetId + '"] li:nth-child(' + (index + 1) + ')').addClass('active');
            });
        }
    });
}
initCarouselIndicators();



//Slide Row 2 Homepage - Mobile
$('.slider-products').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	adaptiveHeight: true, 
	asNavFor: '.slider-nav-products',
});

$('.slider-nav-products').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.slider-products',
	arrows: true,
	focusOnSelect: true
});



//Menu control Products

$.fn.responsiveTabs = function() {
  this.addClass('responsive-tabs');
  this.append($('<span class="glyphicon glyphicon-triangle-bottom"></span>'));
  this.append($('<span class="glyphicon glyphicon-triangle-top"></span>'));

  this.on('click', 'li.active > a, span.glyphicon', function() {
    this.toggleClass('open');
  }.bind(this));

  this.on('click', 'li:not(.active) > a', function() {
    this.removeClass('open');
  }.bind(this));
};

$('.nav.nav-tabs').responsiveTabs();



//Slide Customers - Products

var owl = $(".khtb");

$(".khtb").owlCarousel({
	autoPlay: 3000,
	items : 3,
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,3],
	itemsTablet: [768,2],
	itemsMobile: [479,1],
	stopOnHover: true,
	navigation: false,
	navigationText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
	pagination: false
});

$(".next").click(function(){
	owl.trigger('owl.next');
})
$(".prev").click(function(){
	owl.trigger('owl.prev');
})



//Scroll Menu Services

//$(".services-control").niceScroll();
$("#owl-services-menu").owlCarousel({
	autoPlay: 3000,
	items : 2,
	stopOnHover: true,
	pagination: false
});

$(function(){
    var url = window.location.pathname, 
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");
    
        $('#owl-services-menu a').each(function(){
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('active');
            }
        });
});



//Slide Images Dich vu cong truc tuyen

$('.img-gallery .slider').slick({
	autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: false,
	asNavFor: '.img-gallery .slider-nav',
});

$('.img-gallery .slider-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.img-gallery .slider',
	arrows: false,
	focusOnSelect: true
});

//Zoom Img

$('.fancyzoom').fancybox();



//Slide Album

$('.album-news .slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 4000,
	arrows: true,
	fade: true,
	asNavFor: '.album-news .slider-nav'
});

$('.album-news .slider-nav').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.album-news .slider',
	arrows: false,
	focusOnSelect: true,
	centerMode: true
});



//Back to top

var offset = 300,
	scroll_top_duration = 700;
	$back_to_top = $('.btt');
	
$(window).scroll(function(){
	( $(this).scrollTop() > offset ) ? $back_to_top.addClass('btt-is-visible') : $back_to_top.removeClass('btt-is-visible');
});

//Smooth scroll to top
$back_to_top.on('click', function(event){
	event.preventDefault();
	$('body,html').animate({
		scrollTop: 0 ,
	 	}, scroll_top_duration
	);
});



//Add or Change Text

$(".portlet-boundary_3_WAR_portalhoidapportlet_ button").text('Gửi');
$('.news-wrapper .lfr-pagination ul li:first-child a').html('<i class="fa fa-angle-left"></i>');
$('.news-wrapper .lfr-pagination ul li:last-child a').html('<i class="fa fa-angle-right"></i>');
$('.FDS_Homepage > div:nth-child(5)').attr('data-content', 'Đối tác công nghệ');
$('.FDS_Homepage > div:nth-child(7)').attr('data-content', 'Thành viên \nliên minh, cộng đồng');
$('.question-answer .alert-success').text('Cảm ơn bạn đã quan tâm! Chúng tôi sẽ trả lời trong thời gian sớm nhất.');
$('.lfr-pagination-buttons li:nth-last-of-type(2) a').text('Sau');



//Remove all style inline

$('.journal-content-article *').css('font-family', '');



//Scroll to sections

$(".FDS_Homepage > div:nth-child(6) .portlet-body a").mouseover(function () {
	var newHref = 	$(this).attr('href');
	if(newHref.indexOf("#news-menu") <= 0){
		$(this).attr('href', $(this).attr('href')+"#news-menu")
	}
});

$("#banner .navbar-nav > li:nth-child(2) a").mouseover(function () {
	var newHref = 	$(this).attr('href');
	if(newHref.indexOf("#about-menu") <= 0){
		$(this).attr('href', $(this).attr('href')+"#about-menu")
	}
});

$("#banner .navbar-nav > li:nth-child(3) a").mouseover(function () {
	var newHref = 	$(this).attr('href');
	if(newHref.indexOf("#products-menu") <= 0){
		$(this).attr('href', $(this).attr('href')+"#products-menu")
	}
});

$("#banner .navbar-nav > li:nth-child(4) a").mouseover(function () {
	var newHref = 	$(this).attr('href');
	if(newHref.indexOf("#services-menu") <= 0){
		$(this).attr('href', $(this).attr('href')+"#services-menu")
	}
});

$("#banner .navbar-nav > li:nth-child(6) a").mouseover(function () {
	var newHref = 	$(this).attr('href');
	if(newHref.indexOf("#news-menu") <= 0){
		$(this).attr('href', $(this).attr('href')+"#news-menu")
	}
});