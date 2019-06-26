import './welcome.scss';
import $ from 'jquery';
import sticky from "jquery-sticky";
$(window).on('resize load', paddingResize);

function paddingResize() {
    let pt = $('.header').outerHeight();
    $('.welcome').css({
        'padding-top': pt
    });

    $('.welcome__inner-class_active').css({
        'padding-top': pt
    });
}

let intervalSecond;
let intervalFirst;
let timeoutFirst;
let timeoutSecond;

var allGood = true;


$( document ).ready(function() {
    $('.button__color_red').click(function () {
        $(".welcome-dev").addClass("welcome-dev_active").removeClass("close-item");
            $(".header__burger").addClass("header__burger_close");
            $(".header__close").addClass("header__close_active");
        let pt = $('.header').outerHeight();
        $(".welcome__inner-class").sticky({topSpacing:pt,getWidthFrom: '.welcome__inner-class'});
        allGood = false;
    });
    $('.button__color_grey').click(function () {
        $(".welcome-web").addClass("welcome-web_active").removeClass("close-item");
        $(".header__burger").addClass("header__burger_close");
        $(".header__close").addClass("header__close_active");
        let pt = $('.header').outerHeight();
        $(".welcome__inner-class").sticky({topSpacing:pt,getWidthFrom: '.welcome__inner-class'});
        allGood = false;
    })
});

$('.header__close').click(function () {
    $(".header__burger").removeClass("header__burger_close");
    $(".header__close").removeClass("header__close_active");
    $(".welcome-dev").addClass("close-item").removeClass("welcome-dev_active");
    $(".welcome-web").addClass("close-item").removeClass("welcome-web_active");
    allGood = true;
});

$('.welcome__item').click(function () {
        intervalSecond = clearInterval(intervalSecond);
        intervalFirst = clearInterval(intervalFirst);
        timeoutFirst = clearTimeout(timeoutFirst);
        timeoutSecond = clearTimeout(timeoutSecond);

        $(this)
            .addClass('welcome__item_active')
            .siblings()
            .removeClass('welcome__item_active')
            .closest('.welcome')
            .find('.welcome__tab')
            .removeClass('welcome__tab_active')
            .eq($(this).index())
            .addClass('welcome__tab_active')

        $('.welcome__line')
            .removeClass('welcome__line_active')
            .removeClass('welcome__line_reverse');
    }
)

$('.welcome__item_first').click(function () {
    $('.welcome__title_first')
        .addClass('welcome__title_in')
        .removeClass('welcome__title_out');

    $('.welcome__subtitle_first')
        .addClass('welcome__subtitle_in')
        .removeClass('welcome__subtitle_out');

    $('.welcome__description_first')
        .addClass('welcome__description_in')
        .removeClass('welcome__description_out');

    $('.welcome__title_second')
        .addClass('welcome__title_out')
        .removeClass('welcome__title_in');

    $('.welcome__subtitle_second')
        .addClass('welcome__subtitle_out')
        .removeClass('welcome__subtitle_in');

    $('.welcome__description_second')
        .addClass('welcome__description_out')
        .removeClass('welcome__description_in');

    $('.welcome__envelope_first')
        .addClass('welcome__envelope_in');

    $('.welcome__envelope_second')
        .removeClass('welcome__envelope_in');

    $('.welcome__img_first')
        .addClass('welcome__description_in')
        .removeClass('welcome__description_out');

    $('.welcome__img_second')
        .addClass('welcome__description_out')
        .removeClass('welcome__description_in');
})

$('.welcome__item_second').click(function () {
    $('.welcome__title_second')
        .addClass('welcome__title_in')
        .removeClass('welcome__title_out');

    $('.welcome__subtitle_second')
        .addClass('welcome__subtitle_in')
        .removeClass('welcome__subtitle_out');

    $('.welcome__description_second')
        .addClass('welcome__description_in')
        .removeClass('welcome__description_out');

    $('.welcome__title_first')
        .addClass('welcome__title_out')
        .removeClass('welcome__title_in');

    $('.welcome__subtitle_first')
        .addClass('welcome__subtitle_out')
        .removeClass('welcome__subtitle_in');

    $('.welcome__description_first')
        .addClass('welcome__description_out')
        .removeClass('welcome__description_in');

    $('.welcome__envelope_second')
        .addClass('welcome__envelope_in');

    $('.welcome__envelope_first')
        .removeClass('welcome__envelope_in');

    $('.welcome__img_second')
        .addClass('welcome__description_in')
        .removeClass('welcome__description_out');

    $('.welcome__img_first')
        .addClass('welcome__description_out')
        .removeClass('welcome__description_in');
})

function AnimItemFirst() {
    if(allGood) {
        timeoutFirst = setTimeout(function test() {
            $('.welcome__item_second')
                .addClass('welcome__item_active').siblings().removeClass('welcome__item_active');
            $('.welcome__tab_second')
                .addClass('welcome__tab_active').siblings().removeClass('welcome__tab_active');

            $('.welcome__title_second')
                .addClass('welcome__title_in')
                .removeClass('welcome__title_out');
            $('.welcome__subtitle_second')
                .addClass('welcome__subtitle_in')
                .removeClass('welcome__subtitle_out');

            $('.welcome__title_first')
                .addClass('welcome__title_out')
                .removeClass('welcome__title_in');

            $('.welcome__subtitle_first')
                .addClass('welcome__subtitle_out')
                .removeClass('welcome__subtitle_in');

            $('.welcome__description_second')
                .addClass('welcome__description_in')
                .removeClass('welcome__description_out');

            $('.welcome__description_first')
                .addClass('welcome__description_out')
                .removeClass('welcome__description_in');

            $('.welcome__envelope_second')
                .addClass('welcome__envelope_in');

            $('.welcome__envelope_first')
                .removeClass('welcome__envelope_in');

            $('.welcome__img_second')
                .addClass('welcome__description_in')
                .removeClass('welcome__description_out');

            $('.welcome__img_first')
                .addClass('welcome__description_out')
                .removeClass('welcome__description_in');
        }, 6700);
        $('.welcome__line')
            .addClass('welcome__line_active')
            .removeClass('welcome__line_reverse');
    }
}

AnimItemFirst();

function AnimItemSecond() {
    if(allGood) {
        timeoutSecond = setTimeout(function () {
            $('.welcome__item_first')
                .addClass('welcome__item_active').siblings().removeClass('welcome__item_active');
            $('.welcome__tab_first')
                .addClass('welcome__tab_active').siblings().removeClass('welcome__tab_active');

            $('.welcome__title_first')
                .addClass('welcome__title_in')
                .removeClass('welcome__title_out');

            $('.welcome__subtitle_first')
                .addClass('welcome__subtitle_in')
                .removeClass('welcome__subtitle_out');

            $('.welcome__title_second')
                .addClass('welcome__title_out')
                .removeClass('welcome__title_in');

            $('.welcome__subtitle_second')
                .addClass('welcome__subtitle_out')
                .removeClass('welcome__subtitle_in');

            $('.welcome__description_first')
                .addClass('welcome__description_in')
                .removeClass('welcome__description_out');

            $('.welcome__description_second')
                .addClass('welcome__description_out')
                .removeClass('welcome__description_in');

            $('.welcome__envelope_first')
                .addClass('welcome__envelope_in');

            $('.welcome__envelope_second')
                .removeClass('welcome__envelope_in');

            $('.welcome__img_first')
                .addClass('welcome__description_in')
                .removeClass('welcome__description_out');

            $('.welcome__img_second')
                .addClass('welcome__description_out')
                .removeClass('welcome__description_in');
        }, 6700);
        $('.welcome__line')
            .addClass('welcome__line_reverse')
            .removeClass('welcome__line_active');
    }
}

intervalSecond = setInterval(AnimItemSecond, 7000);
intervalFirst = setInterval(AnimItemFirst, 14000);

