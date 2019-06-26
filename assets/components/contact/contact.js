import './contact.scss';
import $ from 'jquery';
import {Validator} from "../../utils/_validator";

$(window).on('resize load', paddingResize);

function paddingResize() {
    let pt = $('.header').outerHeight();
    $('.contactPage').css({
        'padding-top': pt
    });
}

$(document).ready(function() {
    $('.contactPage__info-adrress-tabs-item:first-child').addClass("contactPage__info-adrress-tabs-item_active");
    $('.contactPage__info-adrress-content:nth-child(1)').addClass("contactPage__info-adrress-content_active");
});


$('.preloader__text-grey').click(function () {
    $('#info-message').css("display","block");
    $('.preloader').removeClass('preloader_active');
});


$('.contactPage__info-adrress-tabs-item').click(function () {
    $(this)
        .addClass('contactPage__info-adrress-tabs-item_active').siblings().removeClass('contactPage__info-adrress-tabs-item_active')
        .closest('.contactPage__info').find('.contactPage__info-adrress-content').removeClass('contactPage__info-adrress-content_active').eq($(this).index()).addClass('contactPage__info-adrress-content_active');
});


$('#info-message').submit(function (event) {
    event.preventDefault();
    let email = $(this).find("[name*='useremail']").val();
    let name = $(this).find("[name*='username']").val();
    let message = $(this).find("[name*='usermessage']").val();
    if (name.length === 0) {
        console.log('username', Validator.ERROR_EMPTY_FIELD);
        $('.contactPage__info-message-input-inner-response-name').text('The field "name" is required');
        $(this).find("[name*='username']").addClass('input_error');
        return;
    } else {
        $(this).find("[name*='username']").removeClass('input_error');
        $('.contactPage__info-message-input-inner-response-name').text('');
    }

    if (!Validator.email(email)) {
        console.log('useremail', Validator.ERROR_EMAIL_FIELD);
        $('.contactPage__info-message-input-inner-response-email').text('Incorrect e-mail');
        $(this).find("[name*='useremail']").addClass('input_error');
        return;
    } else {
        $(this).find("[name*='useremail']").removeClass('input_error');
        $('.contactPage__info-message-input-inner-response-email').text('');
    }

    if (message.length === 0) {
        console.log('usermessage', Validator.ERROR_EMPTY_FIELD);
        $('.contactPage__info-message-input-inner-response').text('The "message" field is required');
        $(this).find("[name*='usermessage']").addClass('textarea_error');
        return;
    } else {
        $(this).find("[name*='usermessage']").removeClass('textarea_error');
        $('.contactPage__info-message-input-inner-response').text('');
    }



    let data = {
        action: 'sendForm',
        name: name,
        email: email,
        message: message
    };

    $.ajax({
        type: 'POST',
        url: mastakSendMail.url,
        data: data,
        beforeSend: function () {
            $('.preloader').addClass('preloader_active');
        },
        success: function (response) {
            console.log(response);
            let resp = JSON.parse(response);
            if (resp.status === 1) {
                $('.contactPage__info-message-input-inner-response').text(resp.text);
                $('.contactPage__info-message-input-inner-response-name').text(resp.text);
                $('.contactPage__info-message-input-inner-response-email').text(resp.text);
            }
            if (resp.status === 0) {
                $('.contactPage__info-message-input-inner-response').text(resp.text);
                $('.contactPage__info-message-input-inner-response-name').text(resp.text);
                $('.contactPage__info-message-input-inner-response-email').text(resp.text);
            }
            $('#info-message')[0].reset();
            $('#info-message').css("display","none");
        },
        error: function (x, y, z) {
            console.log(x);
            $('.preloader').removeClass('preloader_active');
            $('.contactPage__info-message-input-inner-response').text('ERROR');

        }
    });
});