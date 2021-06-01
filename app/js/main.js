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

    $('.icon-th-list').on('click', function(){
        $('.favorites__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');
    });

    $('.icon-th-large').on('click', function(){
        $('.favorites__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active');
    });

    $('.single-tabs__box .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.single-tabs__box').find('.tab-item').removeClass('active-tab').hide();
        $('.single-tabs__box .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.menu__btn').on('click', function(){
        $('.menu__inner').slideToggle();
    });

    $('.header-top__btn').on('click', function(){
        $('.user__menu-box').toggleClass('active');
    });
    
    // $('.weekly__content-inner').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-left.png" alt="#"></button>',
    //     nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-right.png" alt="#"></button>',
    // });

    var mixer = mixitup('.newest__items-inner');
  
});

