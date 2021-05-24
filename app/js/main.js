$(function(){

    $('.followers__items-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-left.png" alt="#"></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-right.png" alt="#"></button>',
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 400,
        from: 30,
        to: 300,
        prefix: "$"
    });

    $('.icon-th-list').on('click', function(){
        $('.category__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');
    });

    $('.icon-th-large').on('click', function(){
        $('.category__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active');
    });

    // $('.weekly__content-inner').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-left.png" alt="#"></button>',
    //     nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-right.png" alt="#"></button>',
    // });

    var mixer = mixitup('.newest__items-inner');
  
});

