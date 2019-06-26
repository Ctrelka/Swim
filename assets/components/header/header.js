import './header.scss';
import $ from 'jquery';

$(".header__burger").click(function(){
    $(".header__burger").toggleClass("header__burger_active");
    $(".header__menu").toggleClass("header__menu_active");
    $(".header__menu-title").toggleClass("header__menu-title_active");
    $(".header__menu-list-item").toggleClass("header__menu-list-item_active-item");
    $(".header__menu-list-item").toggleClass("active");
    $(".header__menu-list-item_active").find( "a" ).toggleClass("header__menu-list-item_active-link-load");
});


$( ".header__menu-list-item" )
    .mouseover(function() {
        $(".header__menu-list-item_active").find( "a" ).removeClass("header__menu-list-item_active-link");
        $(".header__menu-list-item_active").find( "a" ).removeClass("header__menu-list-item_active-link-load");

    })
    .mouseout(function() {
        $(".header__menu-list-item_active").find( "a" ).addClass("header__menu-list-item_active-link");
    });
