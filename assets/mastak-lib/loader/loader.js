import $ from 'jquery';

const JS_IMG_CLASS = 'js-img';

let $loader = $('.loader');
let $body = $('body');

let loadingImages = document.getElementsByClassName(JS_IMG_CLASS);
let count = loadingImages.length;
$(document).ready(showContent);


for (let i = 0; i < loadingImages.length; i++) {
    loadingImages[i].onload = imageLoaded;
    loadingImages[i].src = $(loadingImages[i]).data('src');
}

function imageLoaded() {
    count--;
    showContent();

}

function showContent() {

    var check=getCookie("loader");

    if (check!="false") {
        var loader="true";
    }else{
        loader=check;
    };
    if (loader=="true") {

        if (count === 0) {
            stopLoading();
        }

    }else {
        if (count === 0) {
            stopLoading2();
        }
    }



}



function getCookie(name) {
    return (name = (document.cookie + ';').match(new RegExp(name + '=.*;'))) && name[0].split(/=|;/)[1];
}

export function stopLoading(event) {

    setTimeout(function() {
        $body.removeClass('body_overflow_hidden');
        $loader.fadeOut(function () {
            $(this).remove();
            if(typeof event === 'function'){
                event();
            }
        });
    }, 2000);


}

export function stopLoading2(event) {

    $body.removeClass('body_overflow_hidden');
    $loader.fadeOut(function () {
        $(this).remove();
        if(typeof event === 'function'){
            event();
        }
    });


}

export function startLoading() {
    $body.addClass('body_overflow_hidden');
    $body.prepend($loader);
    $loader.fadeIn();
}