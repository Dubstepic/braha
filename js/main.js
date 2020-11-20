
let window_w = $(window).innerWidth();


$(window).on('load', function() {
    /*------------------
        Preloader
    --------------------*/
    $(".loader").fadeOut();
    $("#preloader").delay(500).fadeOut("slow");
});
(function($) {

    /*------------------
        Navigation
    --------------------*/
    // $('.nav-switch').on('click', function(event) {
    //     $('.nav-menu').slideToggle(400);
    //     event.preventDefault();
    // });



    /*------------------
        Background set
    --------------------*/
    $('.set-bg').each(function() {
        let bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
        $(this).css('background-repeat', 'no-repeat');
        $(this).css('background-size', 'cover');

    });

    /*------------------
        Projects Slider
    --------------------*/
    let project = $('#gallery-carousel').owlCarousel({
        nav: true,
        loop: false,
        margin:20,
        navText: ['<i class="fa fa-long-arrow-left"></i> PREV', 'NEXT<i class="fa fa-long-arrow-right"></i>'],
        responsive:{
            0:{
                items:1,
                margin: 0
            },
            600:{
                items:2
            },
            800:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            },
        }
    });
    /* animate filter */
    var owlAnimateFilter = function(even) {
        $(this)
            .addClass('__loading')
            .delay(70 * $(this).parent().index())
            .queue(function() {
                $(this).dequeue().removeClass('__loading')
            });
    }

    /* Projects filter */
    $('.gallery-filters-nav li').on('click', function(e) {
        var filter_data = $(this).data('filter');

        /* return if current */
        if($(this).hasClass('btn-active')) return;

        /* active current */
        $(this).addClass('btn-active').siblings().removeClass('btn-active');

        /* Filter */
        project.owlFilter(filter_data, function(_owl) {
            $(_owl).find('.single-image').each(owlAnimateFilter);
        });
    });



    //Set progress circle 1
    $("#progress1").circleProgress({
        value: 0.75,
        size: 195,
        thickness: 20,
        fill: "#baff00",
        emptyFill: "rgba(0, 0, 0, 0)"
    });
    //Set progress circle 2
    $("#progress2").circleProgress({
        value: 0.83,
        size: 195,
        thickness: 20,
        fill: "#baff00",
        emptyFill: "rgba(0, 0, 0, 0)"
    });
    //Set progress circle 3
    $("#progress3").circleProgress({
        value: 0.25,
        size: 195,
        thickness: 20,
        fill: "#baff00",
        emptyFill: "rgba(0, 0, 0, 0)"
    });
    //Set progress circle 4
    $("#progress4").circleProgress({
        value: 0.95,
        size: 195,
        thickness: 20,
        fill: "#baff00",
        emptyFill: "rgba(0, 0, 0, 0)"
    });
// Fits the hero video

})(jQuery);
objectFitVideos();

// Initialises fullpage plugin
let myFullpage = new fullpage('#fullpage', {
    //Navigation
    menu: '#myMenu',
    lockAnchors: false,
    anchors:['home', 'about', 'services', 'gallery', 'team', 'contact'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About' , 'Services', 'Gallery', 'Team', 'Contact'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: false,
    fitToSection: false,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: true,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: null,
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    sectionsColor : ['white', 'white', 'white', 'white', 'white','white',],
    paddingTop: '6.5em',
    paddingBottom: '1em',
    fixedElements: '',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    cards: false,
    cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    //events
    onLeave: function(origin, destination, direction){},
    afterLoad: function(origin, destination, direction){},
    afterRender: function(){},
    afterResize: function(width, height){},
    afterReBuild: function(){},
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(section, origin, destination, direction){},
    onSlideLeave: function(section, origin, destination, direction){}
});



// crop images to grid size
// $(".grid-item").each(function(){
//   let wDiv = $(this);
//   let wPhoto = $(this).find("img");
//   let hWide = ($(this).width())/2; //half the image's width
//   console.log("DIV WIDTH: " + wDiv.height() + "        PHOTO WIDTH: " + wPhoto.height())
//   hWide = '-' + hWide + 'px';
//   if(wPhoto.height() < wDiv.height()) {
//     console.log("Heloo");
//     $(wPhoto).width(wDiv.width());
//   }
//   $(this).addClass("js-fix").css({
//     "margin-left" : hWide,
//   });
// });
// sizing thumbnails
// function sizeThumbs(){
//   //resize each idea image so it is a good sized/centered thumbnail
//   $.each($("img.thumbpic"), function() {
//     let maxWidth = 250;
//     let maxHeight = 150;
//     let width = $(this).width();
//     let height = $(this).height();
//
//     if((width/maxWidth) < (height/maxHeight)){
//       let multiplier = maxWidth/width;
//       let newHeight = height * multiplier;
//
//       $(this).css("width", maxWidth);
//       $(this).css("height", newHeight);
//
//       let heightD = (maxHeight - newHeight)/2;
//       $(this).css("margin-top", heightD+"px");
//       $(this).css("margin-bottom", heightD+"px");
//     }else{
//       let multiplier = maxHeight/height;
//       let newWidth = width * multiplier;
//
//       $(this).css("width", newWidth);
//       $(this).css("height", maxHeight);
//
//       let widthD = (maxWidth - width)/2;
//       $(this).css("margin-left", widthD+"px");
//       $(this).css("margin-right", widthD+"px");
//     }
//   });
// }
