$(function(){

    var mixer = mixitup('.newest__items-inner');

    $('.followers__items-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-left.png" alt="#"></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-right.png" alt="#"></button>',
    });

    // $('.weekly__content-inner').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-left.png" alt="#"></button>',
    //     nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-right.png" alt="#"></button>',
    // });
  
});

