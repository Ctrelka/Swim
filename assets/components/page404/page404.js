import './page404.scss';
import $ from 'jquery';

$(window).on('resize load', paddingResize);

function paddingResize() {
    let pt = $('.header').outerHeight();
    $('.page404').css({
        'padding-top': pt
    });
}