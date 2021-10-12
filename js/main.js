$(document).ready(function() {
    if ($('.category-title').length) {
        $('.category-title').each(function(index, element) {
            var heading = $(element);
            var word_array, cut_word, first_part;
    
            word_array = heading.html().split(/\s+/);
            cut_word = word_array.pop();
            first_part = word_array.join(' ');
    
            heading.html([first_part, ' <span class="last-word">', cut_word, '</span>'].join(''));
        });
    } else {
        ;
    }

    $('.hamburger-btn').click(function() {

        $mobileNav = $('.navbar');
        $navbarBtn = $('.hamburger-btn');

        if ($(this).hasClass('open')) {
            $mobileNav.css({"width": "0"});
            $mobileNav.css({"opacity": "0"});
            $mobileNav.css({"visibility": "hidden"});

        }
        else {
            $mobileNav.css({"width": "100%"});
            $mobileNav.css({"opacity": "1"});
            $mobileNav.css({"visibility": "visible"});
        }

        $(this).toggleClass('open');
    });

    $('#category-btn').click(function() {

        var categoryArea = $('#category-btn');
        var categoryTgr = $('.collapsed-trigger');
        var openCat = '-';
        var closeCat = '+';

        if (categoryArea.hasClass('collapsed')) {
            categoryTgr.text(closeCat);
        } else {
            categoryTgr.text(openCat);
        }
    });

    if ($('.slider-partners').length) {
        $('.slider-partners').slick({
            mobileFirst: true,
            infinite: false,
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            rows: 2, 
            slidesPerRow: 7,
            dots: true,
            centerMode: true,
            centerPadding: '0px',
            appendArrows: $('.slider-arrows'),
            prevArrow: '<button id="prev" type="button" class="slider-btn"> < </button>',
            nextArrow: '<button id="next" type="button" class="slider-btn"> > </button>',
            responsive: [
                {
                    breakpoint: 801,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        rows: 1, 
                        slidesPerRow: 4
                      }
                }
            ]
        });
    } else {
        ;
    }

    if ($('.slider-contact').length) {
        if ($(window).width() <= '800') {
            $('.slider-contact').slick({
                mobileFirst: true,
                infinite: false,
                mobileFirst: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
                centerMode: true,
                centerPadding: '0px',
                appendArrows: $('.contact-arrows'),
                prevArrow: '<button id="prev" type="button" class="slider-btn"> < </button>',
                nextArrow: '<button id="next" type="button" class="slider-btn"> > </button>'
            });
        }
    } else {
        ;
    }

    //Thumbnail Slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        vertical:true,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        verticalSwiping:true,
        responsive: [
        {
            breakpoint: 992,
            settings: {
              vertical: false,
            }
        },
        {
          breakpoint: 768,
          settings: {
            vertical: false,
          }
        },
        {
          breakpoint: 580,
          settings: {
            vertical: false,
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 380,
          settings: {
            vertical: false,
            slidesToShow: 2,
          }
        }
        ]
    });

    // videoslider
    if ( $('.video-slider-main').length ) {
        var $slider = $('.video-slider-main')
            .on('init', function(slick) {
                $('.video-slider-main').fadeIn(1000);
            })
            .slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                autoplay: true,
                lazyLoad: 'ondemand',
                autoplaySpeed: 3000,
                asNavFor: '.video-slider-thmb',
                appendArrows: $('.video-slider-arrows'),
                prevArrow: '<button id="prev" type="button" class="slider-btn"> < </button>',
                nextArrow: '<button id="next" type="button" class="slider-btn"> > </button>'
            });

        var $slider2 = $('.video-slider-thmb')
            .on('init', function(slick) {
                $('.video-slider-thmb').fadeIn(1000);
            })
            .slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                lazyLoad: 'ondemand',
                asNavFor: '.video-slider-main',
                dots: false,
                arrows: true,
                centerMode: false,
                focusOnSelect: true
            });

    $('.video-slider-thmb .slick-slide').removeClass('slick-active');

    $('.video-slider-thmb .slick-slide').eq(0).addClass('slick-active');

    $('.video-slider-main').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $('.video-slider-thmb .slick-slide').removeClass('slick-active');
        $('.video-slider-thmb .slick-slide').eq(mySlideNumber).addClass('slick-active');
    });
    
    
    // init slider
    require(['js-sliderWithProgressbar'], function(slider) {

        $('.video-slider-main').each(function() {

            me.slider = new slider($(this), options, sliderOptions, previewSliderOptions);

        });
    });

    var options = {
        progressbarSelector    : '.bJS_progressbar'
        , slideSelector        : '.bJS_slider'
        , previewSlideSelector : '.bJS_previewSlider'
        , progressInterval     : ''
        , onCustomProgressbar : function($slide, $progressbar) {}
    }

    var sliderOptions = {
        slidesToShow   : 1,
        slidesToScroll : 1,
        arrows         : true,
        fade           : true,
        autoplay       : true
    }

    var previewSliderOptions = {
        slidesToShow   : 3,
        slidesToScroll : 1,
        dots           : false,
        focusOnSelect  : true,
        centerMode     : true
    }
    }
});